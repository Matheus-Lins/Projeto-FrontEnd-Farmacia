import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  Categoria: Categoria;
}
function CardCategoria({ Categoria }: CardCategoriaProps) {
  const titulo = Categoria ? `Categoria #${Categoria.id}` : "Categoria";
  const descricao = Categoria?.descricao ?? "Descrição da categoria";

  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md">
      <header className="py-2 px-6 bg-[#0f766e] text-white font-bold text-xl">
        {titulo}
      </header>

      <p className="p-8 text-2xl bg-slate-100 h-full">{descricao}</p>

      <div className="flex">
        <Link
          to={`/categorias/editar/${Categoria.id}`}
          className="w-full text-slate-100 bg-[#0f766e] hover:bg-[#0b5a53] flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to=""
          className="w-full text-slate-100 bg-red-500 hover:bg-red-700 flex items-center justify-center py-2"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
