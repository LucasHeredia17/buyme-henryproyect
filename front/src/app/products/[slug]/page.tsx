import { AddToCart } from "@/app/components/buttons";
import { getProductById } from "@/helpers/product.helper";
import Image from "next/image";

const Products = async ({ params }: { params: any }): Promise<JSX.Element> => {
  const { slug } = params;
  const product = await getProductById(slug);

  return (
    <div className="flex items-center justify-center h-[50rem] px-40">
      <div className="flex items-center justify-center min-h-[40rem]  bg-white p-8 rounded border-2 border-secondary">
        <div className="flex items-center justify-center mr-4 w-[30rem] h-[38rem]">
          <Image
            className="w-full"
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col items-start justify-center mx-2 w-[35rem]">
          <h1 className="text-5xl font-extrabold pb-4 underline hover:text-secondaryColor cursor-default">
            {product.name}
          </h1>
          <p className="text-xl pb-4">{product.description}</p>
          <p className="text-3xl font-bold pb-4 text-secondaryColor cursor-default">
            ${product.price}
          </p>
        </div>
        <div className="flex flex-col items-center justify-between ml-2 w-[20rem] h-[38rem] border-2 border-slate-200 p-4 rounded-lg">
          <div className="text-xl text-center flex mt-10">
            Llega en 3 días{" "}
            <p className="font-bold ml-1 text-secondaryColor">gratis</p>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-sm">Hay {product.stock} unidades disponibles</p>
            <AddToCart>Añadir al carrito</AddToCart>
          </div>
          <div className="flex flex-col text-right text-sm text-slate-400">
            <p className="py-1">
              Devolución gratuita. Tenés 30 días desde que lo recibís.
            </p>
            <p className="py-1">
              Compra Protegida. Recibí el producto que esperabas o te devolvemos
              tu dinero.
            </p>
            <p className="py-1">1 años de garantía de fábrica.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
