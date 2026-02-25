function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-[#0f766e] text-white">
        <div className="container flex justify-between items-center mx-8">
          
          {/* Nome do Projeto */}
          <span className="text-2xl font-bold tracking-wide">
            FarmaLife
          </span>

          {/* Links */}
          <div className="flex gap-8 text-lg">
            <span className="cursor-pointer hover:text-emerald-200">Home</span>
            <span className="cursor-pointer hover:text-emerald-200">Listar Categorias</span>
            <span className="cursor-pointer hover:text-emerald-200">Cadastrar Categoria</span>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;