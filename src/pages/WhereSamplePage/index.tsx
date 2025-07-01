import { InfoScreen } from '@/components/InfoScreen';
import './index.css';

export function WhereSamplePage () {
    return (
        <div>
            <div className="container">
            <div>
                <InfoScreen
                name = "Onde amostrar"
                text="O VESS pode ser aplicado para qualquer solo, uso e manejo. É importante selecionar a 
                área de interesse e sempre comparar com uma área com boa qualidade estrutural 
                (mata nativa ou solo não cultivados). É importante comparar, por exemplo, 
                áreas com baixa produtividade e área com alta produtividade. Dentro de uma área homogênea 
                avalie 3 a 5 pontos (Guimarães et al., 2017)."
                image=""
                before="/equipments"
                after="/when" />
            </div>
            </div>
        </div>
    )
}