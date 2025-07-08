import { Link } from "react-router-dom";
import "./index.css";
import { ScreenProps } from "@/commons/interfaces";

export const InfoScreen: React.FC<ScreenProps> = ({name, text, image, before, after}) => {
  return (
    <div>
      <div className="container">
        <div>
          <h1> {name} </h1>
        </div>

        <div>
            <p> {text} </p>
        </div>

        <div className="divisor mt-5"></div>

        {image != "" && (
          <>
            <div className="d-flex justify-content-center align-itens-center">
              <img src={image} alt={name} className="mt-5" />
            </div>

            <div className="divisor mt-5"></div>
          </>
        )}

        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center mt-5">
            <Link to={before} className="button-aval"> VOLTAR </Link>
          </div>

          <div style={{width: '3rem'}}></div>

          <div className="d-flex justify-content-center mt-5">
            <Link to={after} className="button-aval"> PRÓXIMO </Link>
          </div>
        </div>
      </div>
    </div>
  );
}