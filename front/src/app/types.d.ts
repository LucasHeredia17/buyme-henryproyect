export interface IProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface ICategory {
  id?: number;
  name: string;
  image?: string;
}

export interface IOrderUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: "admin" | "user";
}

export interface IOrder {
  id: number;
  status: "approved" | "pending" | "rejected";
  date: Date;
  products: Array<IProduct>;
}

export interface IUser {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

export interface IProfile {
  email: string;
  password: string;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface IRegisterForm {
  name: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword?: string;
  [key: string?]: string;
}

export interface IRegisterErrorForm {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  [key: string?]: string;
}

export interface ILoginForm {
  email: string;
  password: string;
  [key: string?]: string;
}

export interface ILoginErrorForm {
  email?: string;
  password?: string;
  [key: string?]: string;
}

export interface IPostLoginProps {
  login: boolean;
  user: IUser;
}
