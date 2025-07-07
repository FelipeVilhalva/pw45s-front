import { Checkbox } from "@chakra-ui/react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ConfiguracaoService from "@/service/ConfiguracaoService";

export function TermsPages() {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  const configuracao = location.state?.configuracao;

  const dadosParaApi = {
    ...configuracao
  };

  const handleSave = async () => {
      const response = await ConfiguracaoService.save(dadosParaApi);
  };

  return (
    <div>
      <div className="container">
        <div className="justify-content-center terms-board">
            <h5> O presente termo e condições de uso visa regular a utilização dos USUÁRIOS ao Aplicativo VESS.
              Ao acessar o Aplicativo VESS, o USUÁRIO expressamente aceita e concorda com as disposições 
              destes Termos e Condições de Uso. </h5>

            <br/>
            <h4 style={{fontWeight: "bolder"}}> DO OBJETIVO </h4>
              
            <h5> Este aplicativo é uma ferramenta gratuita de uso, desenvolvido para fornecer aos 
              agricultores, pesquisadores e profissionais da área agrícola uma avaliação prática, acessível e de baixo 
              custo para avaliar a qualidade da estrutura do solo. </h5>
              
            <h5> O aplicativo permite que os usuários 
              concluam uma autoavaliação sobre suas práticas agrícolas a partir da qualidade estrutural do 
              solo obtida, sugerindo melhorias nas práticas de manejo e contribuindo para melhorar a 
              sustentabilidade em suas ações de manejo do solo. </h5>

            <br/>
            <h4 style={{fontWeight: "bolder"}}> COMUNICAÇÕES </h4>
            
            <h5> O aplicativo VESS disponibiliza o endereço de e-mail rachelguimaraes@utfpr.edu.br 
              como o Canal de Atendimento para receber as comunicações do USUÁRIO. </h5>

            <br/>
            <h4 style={{fontWeight: "bolder"}}> COMPARTILHAMENTO DE DADOS COM OS DESENVOLVEDORES </h4>
            
            <h5> Os desenvolvedores do aplicativo têm como 
              princípio da atuação o respeito ao USUÁRIO, agindo sempre em conformidade com as disposições do 
              Marco Civil da Internet (Lei Federal n. 12965/14) e com a Lei Geral de Proteção de Dados 
              Pessoais (Lei 13.709/18). </h5>
              
            <h5> Ao compartilhar os resultados das avaliações com os desenvolvedores 
              você possibilita que mais pesquisas e melhorias no melhorias no aplicativo sejam realizadas 
              (dados pessoais como nome, E-mail e coordenadas de localização não serão divulgados). </h5>
              
            <h5> O aplicativo pode ser acessado por qualquer dispositivo móvel conectado ou não à Internet, 
              independentemente de localização geográfica. Em vista das diferenças que podem existir entre as 
              legislações locais e nacionais, ao acessar o aplicativo, o USUÁRIO concorda que a legislação 
              aplicável para fins destes Termos e Condições de Uso será aquela vigente na República Federativa 
              do Brasil. </h5>
        </div>

        <div style={{margin: "1rem", padding: "1rem"}}>
          <input type="checkbox" id="cbterms" checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="cbterms">  Li e concordo com os termos e condições de uso do aplicativo. </label>
        </div>

        <div className="d-flex justify-content-center mt-3">
            <Link to="/home" onClick={handleSave} 
              className={`${isChecked && configuracao ? "button-confirguration" : "button-deactivated"}`}>
                Salvar e Finalizar
            </Link>
        </div>
      </div>
    </div>
  );
}
