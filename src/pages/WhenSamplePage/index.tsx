import "./index.css";
import { InfoScreen } from "@/components/InfoScreen";

export function WhenSamplePage() {
  return (
    <div>
      <div className="container">
        <div>
            <InfoScreen
            name = "Quando amostrar"
            text="O VESS pode ser realizado em qualquer época
            do ano. Em solos argilesos deve-se esperar
            pelo menos 4 dias após uma chuva (> 50 mm)
            (Ball et al., 2017) Se o solo estiver muito seco
            ou muito úmido será difícil de ser obtida uma
            amostra representativa. Raízes são melhores
            vistas em uma área com cultura ja
            estabelecida ou logo após a colheita"
            image=""
            before="/where"
            after="/extraction" />
        </div>
      </div>
  </div>
  );
}
