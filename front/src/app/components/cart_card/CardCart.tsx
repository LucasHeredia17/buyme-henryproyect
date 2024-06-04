import { ICartProduct } from "@/app/types";
import Image from "next/image";

const CardCart: React.FC<ICartProduct> = ({
  name,
  price,
  image,
  quantity,
  stock,
}): React.ReactElement => {
  return (
    <div className="flex items-center w-[35rem] h-64 my-4 p-8 bg-white rounded border-2 border-secondary hover:shadow-primary hover:shadow-sm hover:transition-shadow">
      <div className="flex items-center justify-start w-full h-full mr-4">
        <div className="flex items-center justify-center mr-4">
          <Image
            className="w-32 h-auto"
            src={image}
            alt={name}
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-2xl font-bold mb-1 hover:text-secondaryColor">
            {name}
          </h1>
          <p className="text-xl font-semibold mb-1">Precio: ${price}</p>
          <p className="text-sm font-semibold">Stock: {stock}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-semibold">{quantity}</p>
      </div>
    </div>
  );
};

export default CardCart;
