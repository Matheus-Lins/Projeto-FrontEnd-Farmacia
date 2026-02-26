import imagemHome from '../../assets/img/imagem-home.png';

function Home() {
  return (
    <>
      <div className="bg-[#0f766e] flex justify-center min-h-screen">
        <div className="container grid grid-cols-2 text-white items-center">

          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold text-center">
              Seja Bem-Vindo ao sistema de Farmácia!
            </h2>

            <p className="text-xl text-center max-w-md">
              Cuidando da sua saúde com qualidade e confiança.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={imagemHome}
              alt="Imagem Página Home Farmácia"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;