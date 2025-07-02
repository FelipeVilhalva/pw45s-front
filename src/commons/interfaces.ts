export interface ScreenProps {
    name: string;
    text: String;
    image: string;
    before: string;
    after: string;
}

export interface IConfiguracao {
    nome: string;
    email: string;
    pais: string;
    endereco: string;
    idioma: string;
    dataCadastro: Date;
    dataAtualizacao: Date;
}

export interface IAvaliacao {
    configuracaoId: number ;
    nome?: string;
    avaliador?: string;
    informacoes?: string;
    descricaoManejoLocal?: string;
    resumoAvaliacao?: string;
    dataCriacao?: Date;
    dataFim?: Date;
    escoreMedioGeral?: number;
    totalAmostras?: number;
    status?: string;
}

export interface IAmostra{
    avaliacaoId: number;
    nomeAmostra?: string;
    numeroCamadas?: number;
    localizacao?: string;
    arquivo?: string;
    escoreQeVess?: number;
    descricaoManejo?: string;
    resumo?: string;
    outrasInformacoes?: string;
    dataAvaliacao: Date;
}

export interface ICamada{
    amostraId: number;
    numeroCamada: number;
    comprimentoCm: number;
    notaCamada: number;
}