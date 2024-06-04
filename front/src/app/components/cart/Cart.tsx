"use client";
import { ICartProduct, IProduct } from "@/app/types";
import { useEffect, useState } from "react";
import CardCart from "../cart_card/CardCart";
import { ButtonCheckout } from "../buttons";

const Cart = () => {
  const [cart, setCart] = useState<ICartProduct[]>([]);

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
    const countedCart: ICartProduct[] = [];

    if (cartProducts.length > 0) {
      cartProducts.forEach((product: IProduct) => {
        const countedProduct = countedCart.find(
          (item) => item.id === product.id
        );
        if (countedProduct) {
          countedProduct.quantity += 1;
        } else {
          countedCart.push({ ...product, quantity: 1 });
        }
      });
      setCart(countedCart);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mt-8 mb-4 underline hover:text-secondaryColor">
        Tu Carrito
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {cart.map((product, index) => (
            <CardCart
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              description={product.description}
              stock={product.stock}
              categoryId={product.categoryId}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded border-2 border-secondary p-8 m-4 w-[35rem] h-64 hover:shadow-primary hover:shadow-sm hover:transition-shadow">
          <p className="text-xl font-bold mb-4 underline">Resumen del pedido</p>
          <ButtonCheckout />
        </div>
      </div>
    </div>
  );
};

export default Cart;
