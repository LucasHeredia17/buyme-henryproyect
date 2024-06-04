import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <main className="flex flex-col text-center">
        <h1 className="text-6xl text-mainColor font-black mb-2">404</h1>
        <h1 className="text-4xl text-secondaryColor font-black mb-2">
          Oops! Pagina No Encontrada
        </h1>
        <p className="text-lg text-textColorBlack font-semibold mb-2">
          La pagina que estas buscando no existe.
        </p>
        <Link
          className="text-base text-textColorBlack font-medium mb-2 hover:text-mainColorLight"
          href="/home"
        >
          Volver al Inicio
        </Link>
        <Link
          className="text-base text-textColorBlack font-medium hover:text-mainColorLight"
          href="/contact"
        >
          Contactate con el soporte <span aria-hidden="true">&rarr;</span>
        </Link>
      </main>
    </>
  );
};

export default PageNotFound;
