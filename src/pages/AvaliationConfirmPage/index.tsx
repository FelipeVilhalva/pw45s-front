import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import { ChangeEvent, useEffect, useState } from "react";
import { IAmostra, ICamada } from "@/commons/interfaces";
import AmostraService from "@/service/AmostraService";

interface IAmostraComId extends IAmostra {
  id: number;
}

export function AvaliationConfirmPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { avaliacao, amostra, camadas, idSample } = location.state || {};
  const [idAvaliation, setIdAvaliation] = useState(0);

  const [vessColorClass, setVessColorClass] = useState("p-2 text-center good-aval");
  const [escoreVessCalculado, setEscoreVessCalculado] = useState<number | null>(null);
  
  const [amostraAux, setAmostraAux] = useState<IAmostraComId>(amostra || {
    id: 0,
    avaliacaoId: 0,
    nomeAmostra: "",
    numeroCamadas: 0,
    localizacao: "",
    arquivo: "",
    escoreQeVess: 0,
    descricaoManejo: "",
    resumo: "",
    outrasInformacoes: "",
    dataAvaliacao: new Date(),
  });

  useEffect(() => {
    if (camadas && camadas.length > 0) {
      let somaProdutos = 0;
      let somaComprimentos = 0;

      camadas.forEach((camada: ICamada) => {
        somaProdutos += camada.comprimentoCm * camada.notaCamada;
        somaComprimentos += camada.comprimentoCm;
      });

      let escoreFinal = 0;
      if (somaComprimentos > 0) {
        escoreFinal = parseFloat((somaProdutos / somaComprimentos).toFixed(2));
      }
      
      setEscoreVessCalculado(escoreFinal);

      setAmostraAux(prevState => ({
        ...prevState,
        escoreQeVess: escoreFinal
      }));

      if (escoreFinal >= 1 && escoreFinal <= 2.9) {
        setVessColorClass("p-2 text-center good-aval");
      } else if (escoreFinal >= 3 && escoreFinal <= 3.9) {
        setVessColorClass("p-2 text-center mid-aval");
      } else {
        setVessColorClass("p-2 text-center bad-aval");
      }
    }
  }, [camadas]);

  const onChangeAmostra = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    setAmostraAux((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const updateSample = async () => {
    //Setta o id da amostra para poder atualizar corretamente
    amostraAux.id = idSample;

    const response = await AmostraService.update(amostraAux, idSample);
    console.log("Amostra atualizada com sucesso!", response);
  }

  const newSample = () => {
    updateSample();

    navigate("/avaliation", {
      state: {
        idAvaliation: amostra.idAvaliation
      },
    });
  };

  const endingScore = () => {
    updateSample();

    navigate("/avaliationFinal", {
      state: {
        idAvaliation: amostra.idAvaliation
      },
    });
  };
  
  return (
    <div>
      <div className="container">
        {/* Cabeçalho */}
        <div className="d-flex justify-content-center">
          <div className="justify-content-center">
            <h1 className={vessColorClass}> {escoreVessCalculado} </h1>
          </div>
        </div>

        {/* Campos */}
        <div className="justify-content-center">
          <div className="row mt-3">
            <h5> Decisão de manejo: </h5>
            <input id="manejo" maxLength={100} className="text-fields" name="descricaoManejo"
              value={amostraAux.descricaoManejo} onChange={onChangeAmostra} />
          </div>

          <div className="row mt-3">
            <h5> Resumo da avaliação: </h5>
            <input id="resumo" maxLength={100} className="text-fields" name="resumo"
              value={amostraAux.resumo} onChange={onChangeAmostra} />
          </div>

          <div className="row mt-3">
            <h5> Outras informações importantes: </h5>
            <input id="outrasInfo" maxLength={100} className="text-fields" name="outrasInformacoes"
              value={amostraAux.outrasInformacoes} onChange={onChangeAmostra} />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center mt-5">
            <button type="button" className="button-score" onClick={endingScore}> FINALIZAR </button>
          </div>

          <div style={{width: '3rem'}}></div>

          <div className="d-flex justify-content-center mt-5">
            <button type="button" className="button-score" onClick={newSample}> PRÓXIMA AMOSTRA </button>
          </div>
        </div>
      </div>
    </div>
  );
}