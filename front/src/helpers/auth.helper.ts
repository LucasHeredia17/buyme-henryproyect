import { ILoginForm, IRegisterForm } from "@/app/types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const registerFunction = async (dataUser: IRegisterForm) => {
  try {
    const res = await axios.post(`${API_URL}/users/register`, dataUser, {
      headers: {
        "Content-Type": "application/json",
        // "ngrok-skip-browser-warning": "true",
      },
    });
    if (res.status === 201 || res.statusText === "Created") {
      return res.data;
    } else {
      throw new Error("Failed to register");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

const loginFunction = async (dataUser: ILoginForm) => {
  try {
    const res = await axios.post(`${API_URL}/users/login`, dataUser, {
      headers: {
        "Content-Type": "application/json",
        // "ngrok-skip-browser-warning": "true",
      },
    });
    if (res.status === 200 || res.data.login === true) {
      return res.data;
    } else {
      throw new Error("Failed to login");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export { registerFunction, loginFunction };
