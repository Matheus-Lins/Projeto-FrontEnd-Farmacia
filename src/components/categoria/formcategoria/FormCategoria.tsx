import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import {
  getCategoriaById,
  postCategoria,
  putCategoria,
} from "../../../services/Service";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    descricao: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function carregarCategoria(idCategoria: string) {
    try {
      const categoriaBuscada = await getCategoriaById(Number(idCategoria));
      setCategoria(categoriaBuscada);
    } catch (erro) {
      console.error(erro);
      alert("Erro ao carregar a categoria para edição.");
      navigate("/categorias");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      carregarCategoria(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function voltarParaLista() {
    navigate("/categorias");
  }

  async function salvarCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {

        await putCategoria(categoria);
        alert("Categoria atualizada com sucesso!");
      } else {

        await postCategoria(categoria);
        alert("Categoria cadastrada com sucesso!");
      }

      voltarParaLista();
    } catch (erro) {
      console.error(erro);
      alert("Erro ao salvar a categoria.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form
        className="w-full max-w-xl flex flex-col gap-4"
        onSubmit={salvarCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="font-medium">
            Descrição da Categoria
          </label>

          <input
            id="descricao"
            type="text"
            name="descricao"
            placeholder="Descreva a categoria"
            value={categoria.descricao ?? ""}
            onChange={atualizarEstado}
            className="border-2 border-slate-300 rounded p-2 focus:outline-none focus:border-[#0f766e]"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || categoria.descricao.trim() === ""}
          className="rounded text-slate-100 bg-[#0f766e] hover:bg-emerald-800 disabled:bg-emerald-900 disabled:cursor-not-allowed w-1/2 py-2 mx-auto flex justify-center"
        >
          {isLoading
            ? "Salvando..."
            : id === undefined
            ? "Cadastrar"
            : "Atualizar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
