import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { deleteCategoria, getCategoriaById } from "../../../services/Service";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categoria, setCategoria] = useState<Categoria | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const categoriaId = Number(id);

  async function carregarCategoria() {
    try {
      if (!id) return;
      const dados = await getCategoriaById(categoriaId);
      setCategoria(dados);
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar a categoria.");
      navigate("/categorias");
    }
  }

  useEffect(() => {
    carregarCategoria();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function handleDelete() {
    if (!id) return;

    try {
      setIsLoading(true);
      await deleteCategoria(categoriaId);
      alert("Categoria apagada com sucesso!");
      navigate("/categorias");
    } catch (error) {
      console.error(error);
      alert("Erro ao deletar a categoria.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleCancel() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto my-10">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md">
        <header className="py-2 px-6 bg-[#0f766e] text-white font-bold text-2xl">
          Categoria
        </header>

        <p className="p-8 text-xl bg-slate-100 h-full">
          {categoria ? categoria.descricao : "Carregando categoria..."}
        </p>

        <div className="flex">
          <button
            type="button"
            onClick={handleCancel}
            className="w-full text-slate-100 bg-slate-400 hover:bg-slate-500 py-2"
          >
            Não
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={isLoading}
            className="w-full text-slate-100 bg-red-500 hover:bg-red-600 flex items-center justify-center py-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Apagando..." : "Sim, deletar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
