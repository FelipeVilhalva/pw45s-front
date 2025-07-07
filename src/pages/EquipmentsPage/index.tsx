import { useState } from "react";
import "./index.css";
import { InfoScreen } from "@/components/InfoScreen";

export function EquipmentsPage() {
  return (
    <div>
      <div className="container">
        <div>
          <InfoScreen
            name = "Equipamentos"
            text="Pá reta de aproximadamente 25 cm de largura e 22-25 cm de comprimento, trena ou régua 
            de 30 cm. Opcional: folha plástica ou saco de cor clara ou bandeja ~50 x 80 cm, câmera digital."
            image="src/assets/tools.gif"
            before="/"
            after="/where" />
        </div>
      </div>
    </div>
  );
}
