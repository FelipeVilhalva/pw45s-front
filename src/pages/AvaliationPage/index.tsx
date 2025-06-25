import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function AvaliationPage() {
  return (
    <div>
      <div className="container">
        {/*Cabeçalho*/}
        <div className="d-flex justify-content-center">
          <div className="justify-content-center col-9 col-md-9">
            <div className="justify-content-center" style={{position: 'absolute', width: '80vw'}}>
              <div className="d-flex justify-content-center">
                <h5 className="p-2" style={{background: 'white', borderRadius: '10px'}}> Amostra </h5>
              </div>

              <div className="d-flex justify-content-center">
                <p> Editar </p>
              </div>
            </div>
          </div>

          <div className="justify-content-center col-4 col-md-2" style={{position: 'relative'}}>
            <div className="justify-content-end col-12 col-md-12">
              <div className="d-flex justify-content-center">
                <div className="d-flex rounded-circle justify-content-center"
                  style={{backgroundColor: '#ba9c70', width: '3.3rem', height: '3.3rem', border: '1px solid #873a00'}}>
                  <FontAwesomeIcon icon={faQuestion} size="2x" className="m-2" style={{color:'red'}} />
                </div>
              </div>
              
              <div className="d-flex justify-content-center">
                <p className="mt-3" style={{color:'black'}}> Escores VESS </p>
              </div>
            </div>
          </div>
        </div>

        {/*Botões*/}
        <div className="row justify-content-center mt-2 mb-2">
          <div className="d-flex justify-content-center col-12 col-md-6 mb-1">
            <h5> Quantas camadas de solo deseja avaliar? </h5>
          </div>

          <div className="d-flex justify-content-center mt-2">
            <div className="d-flex justify-content-center col-12 col-md-8 mb-3">
              <div className="d-flex rounded-circle justify-content-center mx-2"
                style={{backgroundColor: '#ba9c70', width: '4rem', height: '4rem', border: '1px solid #873a00'}}>
                <h3 style={{color: '#e2daae', alignSelf: 'center'}}> 1 </h3>
              </div>
            
              <div className="d-flex rounded-circle justify-content-center mx-2"
                style={{backgroundColor: '#ba9c70', width: '4rem', height: '4rem', border: '1px solid #873a00'}}>
                <h3 style={{color: '#e2daae', alignSelf: 'center'}}> 2 </h3>
              </div>

              <div className="d-flex rounded-circle justify-content-center mx-2"
                style={{backgroundColor: '#ba9c70', width: '4rem', height: '4rem', border: '1px solid #873a00'}}>
                <h3 style={{color: '#e2daae', alignSelf: 'center'}}> 3 </h3>
              </div>

              <div className="d-flex rounded-circle justify-content-center mx-2"
                style={{backgroundColor: '#ba9c70', width: '4rem', height: '4rem', border: '1px solid #873a00'}}>
                <h3 style={{color: '#e2daae', alignSelf: 'center'}}> 4 </h3>
              </div>

              <div className="d-flex rounded-circle justify-content-center mx-2"
                style={{backgroundColor: '#ba9c70', width: '4rem', height: '4rem', border: '1px solid #873a00'}}>
                <h3 style={{color: '#e2daae', alignSelf: 'center'}}> 5 </h3>
              </div>
            </div>
          </div>
        </div>

        {/*Campos*/}
        <div className="justify-content-center">
          <div className="row mt-3">
            <h5> Local/propriedade (GPS): </h5>
            <textarea maxLength={100} className="text-fields text-center" />
          </div>

          <div className="row mt-3">
            <h5> Avaliador: </h5>
            <textarea maxLength={100} className="text-fields text-center" />
          </div>

          {/*VAI TER QUE FAZER UM COMPONENTE PRA ISSO AQUI*/}
          <div className="row mt-3">
            <h5> Comprimento camada 1: </h5>
            <textarea maxLength={100} className="text-fields text-center" />
          </div>

          <div className="row mt-3">
            <h5> Nota camada 1: </h5>
            <textarea maxLength={100} className="text-fields text-center" />
          </div>
        </div>

        {/*Imagens*/}
        <div className="d-flex justify-content-center mt-4 mb-4">
          <div className="rounded-circle" style={{backgroundColor: '#ba9c70', width: '50px', height: '50px'}}>
            <FontAwesomeIcon icon={faCamera} size="2x" className="m-2" style={{color:'black'}} />
          </div>
        </div>

        {/*Informações*/}
        <div className="d-flex justify-content-center mt-4 mb-4">
          <div className="row mt-3">
            <h5> Outras informações importantes: </h5>
            <textarea className="text-infos text-center" />
          </div>
        </div>

        <div className="d-flex justify-content-center">
            <Link to={"/avaliation"} className="button-aval"> AVALIAR </Link>
          </div>
      </div>
    </div>
  );
}
