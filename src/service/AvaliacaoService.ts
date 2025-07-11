import { IAvaliacao } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const AVALIACAO_URL = "/avaliacoes";

const findAll = async (): Promise<any> => {
  let response;
  try {
    response = await api.get(AVALIACAO_URL);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const remove = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.delete(`${AVALIACAO_URL}/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const save = async (avaliacao: IAvaliacao): Promise<any> => {
  let response;
  try {
    response = await api.post(AVALIACAO_URL, avaliacao);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const update = async (avaliacao: IAvaliacao, id: number): Promise<any> => {
  let response;
  try {
    response = await api.put(`${AVALIACAO_URL}/${id}`, avaliacao);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const findById = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`${AVALIACAO_URL}/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const AvaliacaoService = {
  findAll,
  remove,
  save,
  update,
  findById,
};

export default AvaliacaoService;
