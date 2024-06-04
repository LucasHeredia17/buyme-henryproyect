"use client";

import { createOrder } from "@/helpers/order.helper";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useAuth } from "@/context/AuthContext";

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  category: number;
  stock: number;
}

const ButtonCheckout: React.FC = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setProducts(cart);
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    setTotal(total);
  }, []);

  const handleCheckout = async () => {
    try {
      const orderProducts = new Set(products.map((product) => product.id));
      await createOrder(Array.from(orderProducts), Cookies.get("token")!);
      localStorage.setItem("cart", "[]");
      setProducts([]);
      setTotal(0);
      alert("Gracias por tu compra");
    } catch (error: any) {
      alert(
        `¡¡Error al realizar la compra, debes iniciar sesion!! ${error.message}`
      );
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-4/5">
      <p className="text-lg font-semibold mb-2">Total: ${total.toFixed(2)}</p>
      <Link href={token ? "/orders" : "/signin"}>
        <button
          onClick={handleCheckout}
          className="bg-mainColorLight hover:bg-secondaryColor text-background_light font-bold py-2 px-4 rounded w-full"
        >
          Hacer Compra
        </button>
      </Link>
    </div>
  );
};

export default ButtonCheckout;
