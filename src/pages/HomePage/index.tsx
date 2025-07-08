import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCalendarDays, faComment, faGear, faInfo, faLightbulb, faMapLocationDot, faPersonDigging, faPiggyBank, faScrewdriverWrench, faSeedling, faShareNodes, faV } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";
import AvaliacaoService from "@/service/AvaliacaoService";
import { useEffect, useState } from "react";
import { IAvaliacao, IConfiguracao } from "@/commons/interfaces";
import ConfiguracaoService from "@/service/ConfiguracaoService";

interface IConfiguracaoComId extends IConfiguracao {
  id: number;
}

export function HomePage() {
  const [config, setConfig] = useState<IConfiguracaoComId | null>(null);
  const [estaSalvando, setEstaSalvando] = useState(false);
  const [idAvaliation, setIdAvaliation] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const findConfiguration = async () => {
      try {
        const response: IConfiguracao[] = await ConfiguracaoService.findAll();

        if (response?.length > 0) {
          const lastConfig = response.at(-1) as IConfiguracaoComId;
          if (!lastConfig.id) {
            lastConfig.id = response.length;
          }
          setConfig(lastConfig);
        } else {
          setConfig({ id: 1 } as IConfiguracaoComId);
        }
      } catch (error) {
        console.error("Erro ao buscar configurações:", error);
        setConfig({ id: 1 } as IConfiguracaoComId);
      }
    };

    findConfiguration();
  }, []);

  const criaAvaliacao = async () => {
    if (!config) {
      return;
    }

    setEstaSalvando(true);

    try {
      const novaAvaliacao: IAvaliacao = {
        configuracaoId: config.id,
      };

      const response = await AvaliacaoService.save(novaAvaliacao);
      console.log("Avaliação salva com sucesso!", response);

      console.log(response.data.id);

      navigate("/avaliation", {
      state: {
        idAvaliation: response.data.id,
        avaliacao: response.data
      },
    });
    } catch (error) {
      console.error("Erro ao salvar avaliação:", error);
    } finally {
      setEstaSalvando(false);
    }
  };

  return (
    <div>
      <div className="container">
        <div>
          <div className="d-flex justify-content-center">
            <button type="button" onClick={criaAvaliacao} className="button-aval"> AVALIAR </button>
          </div>

          <div className="divisor mt-5"></div>

          <div className="ms-5 me-5 mt-3">
            <p className="m-3 mt-3 fs-5 fw-bold" style={{color:'black'}}> Processos de avaliação </p>

            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <Link to={"/equipments"} className="card-buttons">
                  <FontAwesomeIcon icon={faScrewdriverWrench} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Equipamentos </p>
                </Link>
              </div>

              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <Link to={"/where"} className="card-buttons">
                  <FontAwesomeIcon icon={faMapLocationDot} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Onde amostrar </p>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <Link to={"/when"} className="card-buttons">
                  <FontAwesomeIcon icon={faSeedling} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Quando amostrar </p>
                </Link>
              </div>

              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <Link to={"/extraction"} className="card-buttons">
                  <FontAwesomeIcon icon={faPersonDigging} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Extração de amostra </p>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <Link to={"/fragmentation"} className="card-buttons">
                  <FontAwesomeIcon icon={faBolt} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Fragmentação de amostra </p>
                </Link>
              </div>

              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <Link to={"/score"} className="card-buttons">
                  <div className="d-flex rounded-circle justify-content-center m-2" style={{backgroundColor: '#876c41', width: '5rem', height: '5rem'}}>
                    <FontAwesomeIcon icon={faV} size="3x" className="m-3" style={{color:'#e2daae'}} />
                  </div>
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Escore VESS </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="divisor mt-5"></div>
        
          <div className="ms-5 me-5 mt-3">
            <p className="m-3 mt-3 fs-5 fw-bold" style={{color:'black'}}> Extras </p>

            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <Link to={"/management"} className="card-buttons">
                  <FontAwesomeIcon icon={faPiggyBank} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Decisão de manejo </p>
                </Link>
              </div>

              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <Link to={"/info"} className="card-buttons">
                  <FontAwesomeIcon icon={faLightbulb} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Informações complementares </p>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <Link to={"/whatis"} className="card-buttons">
                  <FontAwesomeIcon icon={faComment} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> O que é VESS </p>
                </Link>
              </div>

              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <Link to={"/history"} className="card-buttons">
                  <FontAwesomeIcon icon={faCalendarDays} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Minhas avaliações </p>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <div className="card-buttons">
                  <div className="d-flex rounded-circle justify-content-center m-2" style={{backgroundColor: '#876c41', width: '5rem', height: '5rem'}}>
                    <FontAwesomeIcon icon={faInfo} size="3x" className="m-3" style={{color:'#e2daae'}} />
                  </div>

                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Sobre o App </p>
                </div>
              </div>

              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <Link to="/configuration" className="card-buttons">
                  <FontAwesomeIcon icon={faGear} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Configurações </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3 mb-3">
          <div className="rounded-circle" style={{backgroundColor: '#ba9c70', width: '50px', height: '50px'}}>
            <FontAwesomeIcon icon={faShareNodes} size="2x" className="m-2" style={{color:'black'}} />
          </div>
        </div>
      </div>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"></link>
    </div>
  );
}

