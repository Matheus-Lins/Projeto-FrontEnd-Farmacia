import axios from "axios";
import type Categoria from "../models/Categoria";

const api = axios.create({
  baseURL: "https://farmacia-js12.onrender.com"
});

export async function getAllCategorias() {
  const resposta = await api.get<Categoria[]>("/categorias");
  return resposta.data;
}

export async function getCategoriaById(id: number) {
  const resposta = await api.get<Categoria>(`/categorias/${id}`);
  return resposta.data;
}
export async function postCategoria(categoria: Categoria) {
  const resposta = await api.post<Categoria>("/categorias", categoria);
  return resposta.data;
}
export async function putCategoria(categoria: Categoria) {
  const resposta = await api.put<Categoria>("/categorarias", categoria);
  return resposta.data;
}

export async function deleteCategoria(id: number) {
  await api.delete(`/categorias/${id}`);
}