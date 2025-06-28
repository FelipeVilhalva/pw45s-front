import { useState } from "react";
import "./index.css";
import { InfoScreen } from "@/components/InfoScreen";

export function EquipmentsPage() {
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string>("");

  return (
    <div>
      <div className="container">
        <div>
          <InfoScreen
            name = "Equipamentos"
            text="Pá reta de aproximadamente 25 cm de largura e 22-25 cm de comprimento, trena ou régua 
            de 30 cm. Opcional: folha plástica ou saco de cor clara ou bandeja ~50 x 80 cm, câmera digital."
            image="https://i.ytimg.com/vi/iaxmrCUF9aU/maxresdefault.jpg" />
        </div>
      </div>
    </div>
  );
}
