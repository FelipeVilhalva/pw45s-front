import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import { ChangeEvent, useEffect, useState } from "react";
import { IAmostra, IAvaliacao, ICamada } from "@/commons/interfaces";
import AvaliacaoService from "@/service/AvaliacaoService";
import AmostraService from "@/service/AmostraService";

interface IAvaliacaoComId extends IAvaliacao {
  id: number;
}

export function AvaliationFinalPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { avaliacao, amostra, camadas, idAvaliation, idConfig} = location.state || {};
  const [amostras, setAmostras] = useState([]);

  const [vessColorClass, setVessColorClass] = useState("p-2 text-center good-aval");
  const [escoreVessCalculado, setEscoreVessCalculado] = useState<number | null>(null);
  
  const [avaliacaoAux, setAvaliacaoAux] = useState<IAvaliacaoComId>(avaliacao || {
    id: 0,
    configuracaoId: 0,
    nome: "",
    avaliador: "",
    informacoes: "",
    descricaoManejoLocal: "",
    resumoAvaliacao: "",
    dataCriacao: new Date(),
    dataFim: new Date(),
    escoreMedioGeral: 0,
    totalAmostras: 0,
    status: "",
  });

  const findAllSamples = async () => {
    //Setta o id da avaliação para poder pesquisar corretamente
    avaliacaoAux.id = idAvaliation;
    console.log("Id avaliacao: " + avaliacaoAux.id);

    console.log("Teste:" +avaliacaoAux.nome);

    const response = await AmostraService.findAllSamplesById(idAvaliation);
    console.log("Amostra atualizada com sucesso!", response);

    setAmostras(response.data);
    console.log("Amostras:", response.data);
  }

  useEffect(() => {
    findAllSamples();
  }, []);

  useEffect(() => {
    if (amostras && amostras.length > 0) {
      let somaQeVess = 0;
      let somaAmostras = 0;

      amostras.forEach((amostra: IAmostra) => {
        
        if (amostra.escoreQeVess !== undefined && amostra.escoreQeVess !== null) {
          somaQeVess += amostra.escoreQeVess;
          somaAmostras++;
        }
      });

      let escoreFinal = 0;
      if (somaAmostras > 0) {
        escoreFinal = parseFloat((somaQeVess / somaAmostras).toFixed(2));
      }
      
      setEscoreVessCalculado(escoreFinal);
      console.log(escoreFinal);

      setAvaliacaoAux(prevState => ({
        ...prevState,
        escoreMedioGeral: escoreFinal,
        totalAmostras: somaAmostras,
        dataFim: new Date(),
      }));

      if (escoreFinal >= 1 && escoreFinal <= 2.9) {
        setVessColorClass("p-2 text-center good-aval");
      } else if (escoreFinal >= 3 && escoreFinal <= 3.9) {
        setVessColorClass("p-2 text-center mid-aval");
      } else {
        setVessColorClass("p-2 text-center bad-aval");
      }
    }
  }, [amostras]);

  const onChangeAvaliacao = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    setAvaliacaoAux((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const updateAvaliation = async () => {
    //Setta o id da amostra para poder atualizar corretamente
    setAvaliacaoAux(avaliacao)
    avaliacaoAux.id = idAvaliation;
    avaliacaoAux.configuracaoId = idConfig;

    const response = await AvaliacaoService.update(avaliacaoAux, idAvaliation);
    console.log("Avaliação atualizada com sucesso!", response);
  }
  
  return (
    <div>
      <div className="container">
        {/* Cabeçalho */}
        <div className="d-flex justify-content-center">
          <div className="justify-content-center">
            <div className="justify-content-center">
              <h5> Escore Qe-VESS médio do local: </h5>
            </div>

            <div className="d-flex justify-content-center">
              <h1 className={vessColorClass}> {escoreVessCalculado} </h1>
            </div>
          </div>
        </div>

        {/* Campos */}
        <div className="justify-content-center">
          <div className="row mt-3">
            <h5> Decisão de manejo para o local: </h5>
            <input id="manejo" maxLength={100} className="text-fields" name="descricaoManejoLocal"
              value={avaliacaoAux.descricaoManejoLocal} onChange={onChangeAvaliacao} />
          </div>

          <div className="row mt-3">
            <h5> Resumo da avaliação: </h5>
            <input id="resumo" maxLength={100} className="text-fields" name="resumoAvaliacao"
              value={avaliacaoAux.resumoAvaliacao} onChange={onChangeAvaliacao} />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center mt-5">
            <Link to={"/home"} className="button-score" onClick={updateAvaliation}> SALVAR </Link>
          </div>
        </div>
      </div>
    </div>
  );
}