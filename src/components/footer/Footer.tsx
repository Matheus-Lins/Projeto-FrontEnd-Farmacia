function Footer() {

  let data = new Date().getFullYear();

  return (
    <footer className="flex justify-center bg-[#0f766e] text-white py-4">
      <div className="container flex flex-col items-center py-2">

        {/* Texto principal */}
        <p className="text-lg font-bold">
          Farmácia Vida | Copyright: {data}
        </p>
      </div>
    </footer>
  );
}

export default Footer;