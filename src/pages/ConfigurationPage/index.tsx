import { Link } from "react-router-dom";
import "./index.css";
import { IConfiguracao } from "@/commons/interfaces";
import { ChangeEvent, useState } from "react";

export function ConfigurationPage() {
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

  return (
    <div>
      <div className="container">
        {/*Campos*/}
        <div className="justify-content-center">
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
              <Link to={"/terms"} className="button-aval"> Termos e condições de uso </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
