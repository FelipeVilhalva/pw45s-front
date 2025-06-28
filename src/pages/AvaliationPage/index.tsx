import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function AvaliationPage() {
    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
    const [isSelected3, setIsSelected3] = useState(false);
    const [isSelected4, setIsSelected4] = useState(false);
    const [isSelected5, setIsSelected5] = useState(false);

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
              
              <button onClick={() => setIsSelected1(!isSelected1)}
                className={`d-flex rounded-circle justify-content-center mx-2
                  ${isSelected1 ? "selected-button-layers" : "button-layers"}`}> 1 </button>
              
            
              <button onClick={() => setIsSelected2(!isSelected2)}
                className={`d-flex rounded-circle justify-content-center mx-2
                  ${isSelected2 ? "selected-button-layers" : "button-layers"}`}> 2 </button>

              <button onClick={() => setIsSelected3(!isSelected3)}
                className={`d-flex rounded-circle justify-content-center mx-2
                  ${isSelected3 ? "selected-button-layers" : "button-layers"}`}> 3 </button>

              <button onClick={() => setIsSelected4(!isSelected4)}
                className={`d-flex rounded-circle justify-content-center mx-2
                  ${isSelected4 ? "selected-button-layers" : "button-layers"}`}> 4 </button>

              <button onClick={() => setIsSelected5(!isSelected5)}
                className={`d-flex rounded-circle justify-content-center mx-2
                  ${isSelected5 ? "selected-button-layers" : "button-layers"}`}> 5 </button>
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
          {isSelected1 && (
              <>
                <div className="row mt-3">
                  <h5> Comprimento camada 1: </h5>
                  <textarea maxLength={100} className="text-fields" />
                </div>

                <div className="row mt-3">
                  <h5> Nota camada 1: </h5>
                  <textarea maxLength={100} className="text-fields" />
                </div>
              </>
          )}

          {isSelected2 && (
              <>
                <div className="row mt-3">
                  <h5> Comprimento camada 2: </h5>
                  <textarea maxLength={100} className="text-fields" />
                </div>

                <div className="row mt-3">
                  <h5> Nota camada 2: </h5>
                  <textarea maxLength={100} className="text-fields" />
                </div>
              </>
          )}

          {isSelected3 && (
              <>
                <div className="row mt-3">
                  <h5> Comprimento camada 3: </h5>
                  <textarea maxLength={100} className="text-fields" />
                </div>

                <div className="row mt-3">
                  <h5> Nota camada 3: </h5>
                  <textarea maxLength={100} className="text-fields" />
                </div>
              </>
          )}

          {isSelected4 && (
              <>
                <div className="row mt-3">
                  <h5> Comprimento camada 4: </h5>
                  <textarea maxLength={100} className="text-fields" />
                </div>

                <div className="row mt-3">
                  <h5> Nota camada 4: </h5>
                  <textarea maxLength={100} className="text-fields" />
                </div>
              </>
          )}

          {isSelected5 && (
              <>
                <div className="row mt-3">
                  <h5> Comprimento camada 5: </h5>
                  <textarea maxLength={100} className="text-fields" />
                </div>

                <div className="row mt-3">
                  <h5> Nota camada 5: </h5>
                  <textarea maxLength={100} className="text-fields" />
                </div>
              </>
          )}
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
            <textarea className="text-infos" />
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Link to={"/avaliationConfirm"} className="button-aval"> AVALIAR </Link>
        </div>
      </div>
    </div>
  );
}
