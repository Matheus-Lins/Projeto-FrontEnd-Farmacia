import imagemHome from '../../assets/img/imagem-home.png';

function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0f766e", // verde saúde
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            color: "white",
            width: "100%",
            maxWidth: "1280px",
          }}
        >
          {/* Coluna esquerda */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              Seja Bem-Vindo!
            </h2>

            <p
              style={{
                fontSize: "1.25rem",
                textAlign: "center",
                maxWidth: "400px",
              }}
            >
              Cuidando da sua saúde com qualidade e confiança.
              Encontre medicamentos, produtos de higiene e bem-estar
              com praticidade.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  borderRadius: "0.5rem",
                  color: "white",
                  border: "2px solid white",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                Ver Categorias
              </div>
            </div>
          </div>

          {/* Coluna direita */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              src={imagemHome}
              alt="Imagem Página Home Farmácia"
              style={{
                width: "66%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home