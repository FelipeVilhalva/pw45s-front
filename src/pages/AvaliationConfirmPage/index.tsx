import { Link } from "react-router-dom";
import "./index.css";

export function AvaliationConfirmPage() {
  return (
    <div>
      <div className="container">
        {/*Cabeçalho*/}
        <div className="d-flex justify-content-center">
          <div className="justify-content-center col-9 col-md-9">
            <div className="justify-content-center" style={{position: 'absolute', width: '80vw'}}>
              <div className="d-flex justify-content-center">
                <h5 >  </h5>
                <textarea className="p-2 text-name text-center" style={{background: 'white', borderRadius: '10px'}}
                  placeholder="Amostra" maxLength={100} />
              </div>
            </div>
          </div>
        </div>

        {/*Campos*/}
        <div className="justify-content-center">
          <div className="row mt-3">
            <h5> Local/propriedade (GPS): </h5>
            <textarea maxLength={100} className="text-fields" />
          </div>

          <div className="row mt-3">
            <h5> Avaliador: </h5>
            <textarea maxLength={100} className="text-fields" />
          </div>

          {/*Campos que carregam com os botões*/}
          
          <div className="row mt-3">
            <h5> Comprimento camada 1: </h5>
            <textarea maxLength={100} className="text-fields" />
          </div>

          <div className="row mt-3">
            <h5> Nota camada 1: </h5>
            <textarea maxLength={100} className="text-fields" />
          </div>

          <div className="row mt-3">
            <h5> Comprimento camada 2: </h5>
            <textarea maxLength={100} className="text-fields" />
          </div>

          <div className="row mt-3">
            <h5> Nota camada 2: </h5>
            <textarea maxLength={100} className="text-fields" />
          </div>

          <div className="row mt-3">
            <h5> Comprimento camada 3: </h5>
            <textarea maxLength={100} className="text-fields" />
          </div>

          <div className="row mt-3">
            <h5> Nota camada 3: </h5>
            <textarea maxLength={100} className="text-fields" />
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
            <Link to={"/avaliationConfirm"} className="button-aval"> AVALIAR </Link>
          </div>
      </div>
    </div>
  );
}
