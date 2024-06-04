import { IProduct } from "@/app/types";
import { productsToPreLoad } from "@/utils/preLoadData";
import axios, { AxiosResponse } from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

let cachedProducts: IProduct[] | null = null;

async function getProductsDB(): Promise<IProduct[]> {
  if (cachedProducts) {
    return cachedProducts;
  }
  try {
    const res: AxiosResponse<IProduct[]> = await axios.get(
      apiUrl + "/products"
    );
    if (res.status !== 200) {
      throw new Error(`Failed to fetch products. Status: ${res.status}`);
    }
    cachedProducts = res.data;
    return cachedProducts;
  } catch (error: any) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
}

const getProducts = async (): Promise<IProduct[]> => {
  try {
    const productsDB: IProduct[] = await getProductsDB();
    const products: IProduct[] = productsDB.map((product, index) => {
      return {
        ...product,
        image: productsToPreLoad[index].image,
      };
    });
    return products;
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
};

const getProductById = async (id: string): Promise<IProduct> => {
  const products = await getProducts();
  const product = products.find(
    (product) =>
      product.id !== undefined && product.id.toString() === id.toString()
  );
  if (!product) throw new Error("Product not found");
  return product;
};

export { getProducts, getProductById };
