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

const save = async (avaliacao: IAmostra): Promise<any> => {
  let response;
  try {
    response = await api.post(AMOSTRA_URL, avaliacao);
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

const ProductService = {
  findAll,
  remove,
  save,
  findById,
};

export default ProductService;
