import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// const token = process.env.NEXT_PUBLIC_TOKEN_AUTHORIZATION;

const getOrder = async (token: string) => {
  try {
    if (!token) {
      throw new Error("Token is required");
    } else if (!apiUrl) {
      throw new Error("ApiUrl is required");
    }
    const res = await axios.get(`${apiUrl}/users/orders`, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error: any) {
    throw error;
  }
};

const createOrder = async (products: number[], token: string) => {
  try {
    if (!products.length) {
      throw new Error("There must be products in the order");
    } else if (!token) {
      throw new Error("Token is required");
    } else if (!apiUrl) {
      throw new Error("API URL is required");
    }
    const res = await axios.post(
      `${apiUrl}/orders`,
      {
        products,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export { getOrder, createOrder };
