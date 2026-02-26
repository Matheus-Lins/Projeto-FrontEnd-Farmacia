import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { getAllCategorias } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { SyncLoader } from "react-spinners";




function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarCategorias() {
    try {
      setIsLoading(true);

      const resposta = await getAllCategorias();
      setCategorias(resposta);
    } catch (erro) {
      console.error("Erro ao buscar categorias:", erro);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="flex justify-center w-full my-8">
      <div className="container flex flex-col">
        <h2 className="text-3xl font-bold mb-6 text-[#0f766e]">
          Lista de Categorias
        </h2>

        {isLoading && (
          <div className="flex justify-center my-8">
            <SyncLoader color="#0f766e" size={12} />
          </div>
        )}

        {!isLoading && categorias.length === 0 && (
          <span className="text-xl text-center my-8">
            Nenhuma categoria foi encontrada!
          </span>
        )}

        {!isLoading && categorias.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} Categoria={categoria} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListaCategoria;