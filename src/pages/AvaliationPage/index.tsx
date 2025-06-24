import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

export function AvaliationPage() {
  return (
    <div>
      <div className="container">
        {/*Cabeçalho*/}
        <div>
          <div>
            <h5> Amostra </h5>
            <p> Editar </p>
          </div>

          <div>
            <div className="d-flex rounded-circle justify-content-center m-2" style={{backgroundColor: '#876c41', width: '5rem', height: '5rem'}}>
              <FontAwesomeIcon icon={faQuestion} size="3x" className="m-3" style={{color:'#e2daae'}} />
            </div>
            
            <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Escores VESS </p>
          </div>
        </div>
      </div>
    </div>
  );
}
