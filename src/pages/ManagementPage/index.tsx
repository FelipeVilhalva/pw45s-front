import './index.css';

export function ManagementPage () {
    return (
       <div>
            <div className="container">
                <div>
                    <h5>
                        O método VESS fornece uma avaliação da qualidade estrutural atual do solo e permite decisões de manejo do solo que visam melhorar ou manter a qualidade do solo. 
                        Para aliar a VESS à decisão de manejo do solo, são recomendadas múltiplas amostras (3 a 5), avaliadas preferencialmente por um único avaliador.
                    </h5>
                </div>

                <div className="management-card1">
                    <h3> Escores VESS entre 1 a 2,9 </h3>

                    <h5>
                        Amostras (0-25 cm de profundidade) com escores Qe-VESS entre 1–2,9  indicam um solo com boa qualidade estrutural e não requerem mudanças no manejo. 
                    </h5>
                </div>

                <div className="management-card2">
                    <h3> Escores VESS entre 3 a 3,9 </h3>

                    <h5>
                        Amostras (0-25 cm de profundidade) com escores Qe-VESS entre 3-3,9 indicam um solo com 
                        qualidade estrutural razoável que pode ser melhorado. Para maximizar a exploração do 
                        solo pelas raízes das culturas e para ajudar no desempenho de outras funções do solo, 
                        as mudanças no manejo devem ser a longo prazo e podem incluir a adoção de rotação de 
                        culturas com sistema radicular abundantes e/ou de penetração profunda e que maximizem 
                        a produção matéria seca, aumentando a concentração de matéria orgânica no solo. 
                        Ademais, práticas que minimizem a compactação do solo, como a superlotação animal, em 
                        sistemas de integração lavoura-pecuária, e/ou a redução do tráfego de máquinas pesadas 
                        também contribuem para melhorar o escore da qualidade estrutural do solo.
                    </h5>
                </div>

                <div className="management-card3">
                    <h3> Escores VESS entre 4 a 5 </h3>

                    <h5>
                        Amostras (0-25 cm de profundidade) ou camadas com escores Qe-VESS entre 4–5 sugerem, a partir de correlações com propriedades do solo (densidade, porosidade total, macroporosidade, resistência mecânica do solo à penetração das raízes, carbono orgânico, entre outros), danos às funções do solo, comprometendo sua capacidade de suporte ao crescimento, desenvolvimento e à produção das culturas. Se uma camada com escore VESS 4 estiver próximo da superfície do solo, então provavelmente será uma limitação agronômica, pois limitará o crescimento inicial das plantas, sendo geralmente necessário intervenção direta.
                        Idealmente, recomendamos que a decisão de manejo do solo seja baseada por um conjunto de dados de qualidade do solo; características visíveis podem ser utilizadas, tais como evidências de acúmulo superficial 
                        de água, diminuição no rendimento ou evidência de estresse nas culturas, profundidade de enraizamento, relevo superficial, além de medições indiretas como densidade do solo, porosidade, resistência à penetração, macroporosidade, taxas de infiltração e por dados biológicos e de rendimento do solo. Neste caso a mudança de manejo deve ser a curto prazo, ou seja, pensando em melhorias para a próxima cultura comercial, podendo ser utilizados consórcios e culturas com sistema radicular abundante entre safras, ou o revolvimento mecânico.
                    </h5>
                </div>
            </div>
        </div>
    )
}