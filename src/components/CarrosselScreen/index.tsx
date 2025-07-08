import "./index.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScreenProps } from "@/commons/interfaces";
import { ScoreScreen } from "../ScoreScreen";
import { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const CarrosselScreen = () => {
  const swiperRef = useRef<any>(null);

  const screens = [
    {
      title: "Atribuição da nota",
      description: "Compare a amostra com as descrições e fotos representadas a seguir e determine o que mais se assemelha para cada camada da amostra.",
      image: "",
    },
    {
      title: "Qualidade estrutural 1 (Qe 1): Friável",
      description: "Agregados quebram facilmente com os dedos. Alta porosidade. Raízes por todo o solo. Agregados são pequenos, a maioria < 6 mm apósa fragmentação da amostra.",
      image: "src/assets/qe1_1.png",
    },
    {
      title: "Qe 2: Intacto",
      description: "Agregados quebram facilmente com uma mão. Sem presença de torrões (agregados grandes,"+
        "duros, coesos e arredondados). A maioria dos agregados são porosos, com tamanho entre 2 mm -7 cm. "+
        "Raízes por todo o solo. Agregados quando obtidos são redondos, muito frágeis, despedaçam muito "+
        "facilmente e são altamente porosos. Aparência de agregados naturais ou fragmento reduzido de ~1-1,5 "+
        "diâmetro. São redondos, muito frágeis, despedaçam muito facilmente e são altamente porosos.",
      image: "src/assets/qe2_1.png",
    },
    {
      title: "Qe 3: Firme",
      description: "Maioria dos agregados quebram com uma mão. Macroporos e fissuras presentes. Porosidade e raízes: ambas dentro dos agregados. Uma mistura de agregados porosos entre 2 mm -10 cm; menos de 30% são menores que 1 cm. Alguns torrões angulares não porosos podem estar presentes.",
      image: "src/assets/qe3_1.png",
    },
    {
      title: "Qe 4: Compacto",
      description: "Quebrar agregados com uma mão requer esforço considerável. Agregados com poucos macroporos e fissuras. Raízes agrupadas em macroporos e ao redor dos agregados. A maioria dos agregados são maiores que 10 cm e sub-angulares e menos que 30% sãomenores que 7 cm. Macroporos bem distintos. Aparência de agregados naturais ou fragmento reduzido de ~1-1,5 diâmetro Teste de mão: Selecione na amostra, agregados com dimensões de 7-10 cm e utilizando somente uma mão, aplique força gradualmente com a palma da mão em vez de utilizar a ponta dos dedos.",
      image: "src/assets/qe4_1.png",
    },
    {
      title: "Qe 5: Muito compacto",
      description: "Difícil quebra. Porosidade muito baixa. Macroporos podem estar presentes. Pode conter zonas anaeróbicas. Poucas raízes e restritas as fissuras. A maioria dos agregados são maiores que 10 cm, poucos menores que 7 cm, com formato angular e não poroso. A cor azul-acinzentada nos agregados pode ser uma característica distintiva.",
      image: "src/assets/qe5_1.png",
    },
    {
      title: "Avaliações extras:",
      description: "Teste de mão: Em cada camada da amostra, selecione agregados com dimensões de 7-10 cm e utilizando somente uma mão, aplique força gradualmente com a palma da mão em vez de utilizar a ponta dos dedos. "+
      "Caso ainda restem dúvidas sobre que nota atribuir a camada, fragmente um agregado utilizando a unha e aplicando força nos pontos de fraqueza, até obter um agregado de 1,5-2,0 cm. Observe suaforma e facilidade de quebra. "+
      "Agregados não porosos e angulosos são indicativos de estrutura pobre e nota alta. "+
      "Descrição em cada uma das classes de qualidade estrutural. "+
      "Observação: a maior dificuldade em extrair a amostra de solo também é um indicativo de estrutura pobre e nota alta.",
      image: "",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        // Adicione Navigation aqui
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true} // Ativa os botões de navegação (setas)
        spaceBetween={20}
        slidesPerView={1}
        className="h-auto" // A classe 'h-auto' pode precisar de ajustes dependendo do seu CSS
      >
        {screens.map((screen, index) => (
          <SwiperSlide key={index}>
            {/* Agora ScoreScreen não precisa dos props de navegação do carrossel */}
            <ScoreScreen name={screen.title} text={screen.description} image={screen.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Os botões de navegação e paginação serão gerados automaticamente pelo Swiper com as props acima */}
    </div>
  );
}