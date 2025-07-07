import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { IConfiguracao } from "@/commons/interfaces";
import { ChangeEvent, useState } from "react";

export function ConfigurationPage() {
  const navigate = useNavigate();

  const [configuracao, setConfiguracao] = useState<IConfiguracao>({
    nome: "",
    email: "",
    pais: "",
    endereco: "",
    idioma: "",
    dataCadastro: new Date(),
    dataAtualizacao: new Date(),
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setConfiguracao((previousForm) => {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  };

  const handleContinue = () => {
    navigate("/terms", { state: { configuracao } });
  };

  return (
    <div>
      <div className="container">
        {/*Campos*/}
        <div className="justify-content-center p-2">
          <div className="row mt-3">
            <h5> Nome: </h5>
            <input maxLength={100} className="text-fields" name="nome" 
              value={configuracao.nome} onChange={onChange} />
          </div>

          <div className="row mt-3">
            <h5> E-mail: </h5>
            <input maxLength={100} className="text-fields" name="email" 
              value={configuracao.email} onChange={onChange} />
          </div>

          <div className="row mt-3">
            <h5> País: </h5>
            <input maxLength={100} className="text-fields" name="pais" 
              value={configuracao.pais} onChange={onChange} />
          </div>

          <div className="row mt-3">
            <h5> Enderenço: </h5>
            <input maxLength={100} className="text-fields" name="endereco" 
              value={configuracao.endereco} onChange={onChange} />
          </div>

          <div className="row mt-3">
            <h5> Idioma: </h5>
            <input maxLength={100} className="text-fields" name="idioma" 
              value={configuracao.idioma} onChange={onChange} />
          </div>

          <div className="d-flex justify-content-center mt-5">
            <button onClick={handleContinue} className="button-confirguration">
              Termos e condições de uso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
