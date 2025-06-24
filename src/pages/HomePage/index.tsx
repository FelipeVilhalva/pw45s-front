import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCalendarDays, faComment, faGear, faInfo, faLightbulb, faMapLocationDot, faPersonDigging, faPiggyBank, faScrewdriverWrench, faSeedling, faShareNodes, faV } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <div className="container">
        <div>
          <div className="d-flex justify-content-center">
            <Link to={"/avaliation"} className="button-aval"> AVALIAR </Link>
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
                <div className="card-buttons">
                  <FontAwesomeIcon icon={faMapLocationDot} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Onde amostrar </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <div className="card-buttons">
                  <FontAwesomeIcon icon={faSeedling} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Quando amostrar </p>
                </div>
              </div>

              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <div className="card-buttons">
                  <FontAwesomeIcon icon={faPersonDigging} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Extração de amostra </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <div className="card-buttons">
                  <FontAwesomeIcon icon={faBolt} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Fragmentação de amostra </p>
                </div>
              </div>

              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <div className="card-buttons">
                  <div className="d-flex rounded-circle justify-content-center m-2" style={{backgroundColor: '#876c41', width: '5rem', height: '5rem'}}>
                    <FontAwesomeIcon icon={faV} size="3x" className="m-3" style={{color:'#e2daae'}} />
                  </div>
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Escore VESS </p>
                </div>
              </div>
            </div>
          </div>

          <div className="divisor mt-5"></div>
        
          <div className="ms-5 me-5 mt-3">
            <p className="m-3 mt-3 fs-5 fw-bold" style={{color:'black'}}> Extras </p>

            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <div className="card-buttons">
                  <FontAwesomeIcon icon={faPiggyBank} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Decisão de manejo </p>
                </div>
              </div>

              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <div className="card-buttons">
                  <FontAwesomeIcon icon={faLightbulb} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Informações complementares </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <div className="card-buttons">
                  <FontAwesomeIcon icon={faComment} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> O que é VESS </p>
                </div>
              </div>

              <div className="d-flex justify-content-center col-12 col-md-6 mb-3">
                <div className="card-buttons">
                  <FontAwesomeIcon icon={faCalendarDays} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Minhas avaliações </p>
                </div>
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
                <div className="card-buttons">
                  <FontAwesomeIcon icon={faGear} size="4x" className="m-3" style={{color:'black'}} />
                  <p className="m-3 mt-3 fs-5" style={{color:'black'}}> Configurações </p>
                </div>
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
