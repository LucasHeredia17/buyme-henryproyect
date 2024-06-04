import { getProducts } from "@/helpers/product.helper";
import ProductCard from "../product_card/ProductCard";
import { ProductCardsContainer } from "./ProductCards.styles.tailwind";
// import { ProductCardsContainer } from "./ProductCards.styles";
// import { getProducts } from "./helpers";

const ProductCards: React.FC = async (): Promise<JSX.Element> => {
  const products = (await getProducts()) || [];

  return (
    <ProductCardsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ProductCardsContainer>
  );
};

export default ProductCards;
