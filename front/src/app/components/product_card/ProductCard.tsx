import { IProduct } from "@/app/types";
// import {
//   ProductCardContainer,
//   ProductImage,
//   ProductImageContainer,
//   ProductInfo,
//   ProductPrice,
//   ProductTitle,
// } from "./ProductCard.styles";
import {
  ButtonContainer,
  ProductCardContainer,
  ProductImage,
  ProductImageContainer,
  ProductInfo,
  ProductPrice,
  ProductTitle,
} from "./ProductCard.styles.tailwind";
import { DetailProduct, AddToCart } from "../buttons";
import Link from "next/link";

const ProductCard: React.FC<IProduct> = ({
  id,
  name,
  price,
  image,
  categoryId,
  stock,
}): React.ReactElement => {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const product = { id, name, price, image, categoryId, stock };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Añadido al carrito");
  };

  return (
    <ProductCardContainer>
      <ProductImageContainer>
        <Link
          href={`/products/${id}`}
          className="w-full h-auto flex justify-center "
        >
          <ProductImage src={image} alt={name} width={200} height={200} />
        </Link>
      </ProductImageContainer>
      <ProductInfo>
        <Link href={`/products/${id}`}>
          <ProductTitle style={{ transition: "0.2s" }}>{name}</ProductTitle>
        </Link>
        <ProductPrice>${price}</ProductPrice>
      </ProductInfo>
      <ButtonContainer>
        <Link href={`/products/${id}`} className="w-full">
          <DetailProduct>Detalles</DetailProduct>
        </Link>
        <AddToCart onClick={addToCart}>Añadir al carrito</AddToCart>
      </ButtonContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
