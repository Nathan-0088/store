import api from "./api";

export const getProdutos = async () => {
  const response = await api.get("");

  return response.data;
};

export const getDetalhes = async (id: number) => {
  const response = await api.get(`/${id}`);

  return response.data;
};
