"use client";

import { ILoginErrorForm, ILoginForm } from "@/app/types";
import { loginFunction } from "@/helpers/auth.helper";
import { loginValidation } from "@/utils/formValidations";
import { loginForm } from "@/utils/formsData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const router = useRouter();
  const { setToken } = useAuth();

  const initialState: ILoginForm = {
    email: "",
    password: "",
  };

  const [input, setInput] = useState<ILoginForm>(initialState);
  const [errors, setErrors] = useState<ILoginErrorForm>({
    email: "Debe ingresar un email.",
    password: "Debe ingresar una contraseña.",
  });

  useEffect(() => {
    const errors = loginValidation(input);
    setErrors(errors);
  }, [input]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const res = await loginFunction(input);
      if (!res) {
        throw new Error("Error al iniciar sesion");
      }
      setToken(res.token);
      router.push("/home");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div className="bg-mainColorLight py-5 md:px-24 sm:px-8 px-8 rounded-lg shadow-sm shadow-black">
        <form className="" onSubmit={handleSubmit}>
          <h1 className="text-3xl text-center text-textColor font-bold">
            Inicia Sesión
          </h1>

          {loginForm.map(({ label, name, type, placeholder }) => {
            return (
              <div className="flex flex-col h-12 mt-5 mb-14" key={name}>
                <label
                  className="text-textColor text-base mb-1 ml-3"
                  htmlFor={name}
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={input[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                  className="md:w-[35rem] w-[27rem] bg-transparent rounded-3xl border-textColorBlack border-2 text-base text-textColor py-3 px-4 placeholder:text-mainColor"
                />
                <p className="text-secondaryColorStrong text-xs mt-[2px] ml-3">
                  {errors[name] && errors[name]}
                </p>
              </div>
            );
          })}

          <span className="flex items-center justify-center text-sm text-textColor mt-1 mb-2">
            Todos los campos son obligatorios.
          </span>

          <button
            className="w-full h-11 bg-secondaryColor outline-none rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.1)] cursor-pointer text-base text-textColor font-bold hover:py-1 hover:px-4 hover:transition-all hover:bg-secondaryColorStrong"
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="text-sm text-center mt-3 text-textColor">
          <p>
            ¿No tienes una cuenta?{" "}
            <Link
              className="text-textColor no-underline font-bold hover:cursor-pointer hover:text-secondaryColor"
              href="/signup"
            >
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
