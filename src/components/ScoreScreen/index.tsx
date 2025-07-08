import { Link } from "react-router-dom";
import "./index.css";
import { CarrosselProps } from "@/commons/interfaces";

export const ScoreScreen: React.FC<CarrosselProps> = ({name, text, image}) => {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <h1> {name} </h1>
        </div>

        <div className="d-flex justify-content-center">
            <p> {text} </p>
        </div>

        <div className="divisor-score mt-5"></div>

        {image != "" && (
          <>
            <div className="d-flex justify-content-center align-items-center">
              <img src={image} alt={name} className="mt-5" />
            </div>

            <div className="divisor-score mt-5"></div>
          </>
        )}
      </div>
    </div>
  );
}