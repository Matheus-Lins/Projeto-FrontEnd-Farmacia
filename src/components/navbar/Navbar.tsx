import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-[#0f766e] text-white">
        <div className="container flex justify-between items-center mx-8">
          
          {/* Nome do Projeto */}
          <Link to="/home" className="text-2xl font-bold tracking-wide hover:text-emerald-200">
            Farmácia Vida
          </Link>

          {/* Links */}
          <div className="flex gap-8 text-lg">
            <Link to="/home" className="hover:text-emerald-200">Home</Link>
            <Link to="/categorias" className="hover:text-emerald-200">Listar Categorias</Link>
            <Link to="/categorias/cadastrar" className="hover:text-emerald-200">Cadastrar Categoria</Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;