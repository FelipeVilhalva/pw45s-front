import { IConfiguracao } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const CONFIGURACAO_URL = "/configuracoes";

const findAll = async (): Promise<any> => {
  let response;
  try {
    response = await api.get(CONFIGURACAO_URL);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const remove = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.delete(`${CONFIGURACAO_URL}/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const save = async (configuracao: IConfiguracao): Promise<any> => {
  let response;
  try {
    response = await api.post(CONFIGURACAO_URL, configuracao);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const findById = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`${CONFIGURACAO_URL}/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const ConfiguracaoService = {
  findAll,
  remove,
  save,
  findById,
};

export default ConfiguracaoService;
