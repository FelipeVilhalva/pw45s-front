import './index.css';
import { InfoScreen } from "@/components/InfoScreen";

export function SampleFragmentationPage () {
    return (
       <div>
            <div className="container">
                <div>
                    <InfoScreen
                    name = "Fragmentação da amostra"
                    text="Delicadamente manipule a amostra. Segure a amostra por baixo e abra como um livro. 
                    Observe se há camadas que se diferenciam pelo tamanho de agregados e faça a avaliação 
                    individual dessas camadas. Meça o comprimento de cada camada distinta."
                    image="src/assets/fragmentation.gif"
                    before="/extraction"
                    after="/score" />
                </div>
            </div>
        </div>
    )
}