import './index.css';
import { InfoScreen } from "@/components/InfoScreen";

export function SampleExtractionPage () {
    return (
       <div>
            <div className="container">
                <div>
                    <InfoScreen
                    name = "Extração da amostra"
                    text="Abra uma pequena tricheira cavando somente em lados opostos, reservando dois lados 
                    para a retirada da amostra de solo (VER ANIMAÇÃO). Retire uma amostra de 10 a 15 cm de 
                    espessura, 20 cm de largura e aprox. 25 cm de profundidade. Acomode a amostra no chão. 
                    Meça o comprimento (profundidade) da amostra. (É possível profundidades, retirar menores 
                    mas evite amostrar profundidades maiores que 25 cm, para isso utilize o SubVESS 
                    (Ball et al., 2015)."
                    image="https://media.tenor.com/Md_7M6e7ovQAAAAe/gimli-i-am-a-dwarf.png"
                    before="/when"
                    after="/" />
                </div>
            </div>
        </div>
    )
}