import { IAmostra } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const AMOSTRA_URL = "/amostras";

const findAll = async (): Promise<any> => {
  let response;
  try {
    response = await api.get(AMOSTRA_URL);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const remove = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.delete(`${AMOSTRA_URL}/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const save = async (amostra: IAmostra): Promise<any> => {
  let response;
  try {
    response = await api.post(AMOSTRA_URL, amostra);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const update = async (amostra: IAmostra, id: number): Promise<any> => {
  let response;
  try {
    response = await api.put(`${AMOSTRA_URL}/${id}`, amostra);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const findById = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`${AMOSTRA_URL}/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const findAllSamplesById = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`${AMOSTRA_URL}/por-avaliacao/${id}`);
  } catch (error: any) {
    response = error.response;
  }
  return response;
};

const AmostraService = {
  findAll,
  remove,
  save,
  update,
  findById,
  findAllSamplesById
};

export default AmostraService;
