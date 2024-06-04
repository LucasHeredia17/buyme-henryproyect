"use client";

import { IRegisterErrorForm, IRegisterForm } from "@/app/types";
import { registerFunction } from "@/helpers/auth.helper";
import { registerForm } from "@/utils/formsData";
import { registerValidation } from "@/utils/formValidations";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Register: React.FC = (): JSX.Element => {
  const router = useRouter();
  const initialState: IRegisterForm = {
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [input, setInput] = useState<IRegisterForm>(initialState);
  const [errors, setErrors] = useState<IRegisterErrorForm>({
    name: "Debe ingresar su nombre.",
    address: "Debe ingresar su dirección.",
    phone: "Debe ingresar su teléfono.",
    email: "Debe ingresar un email.",
    password: "Debe ingresar una contraseña.",
    confirmPassword: "Debe re-ingresar su contraseña.",
  });

  useEffect(() => {
    const errors = registerValidation(input);
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
      await registerFunction(input);
      alert(`¡Registrado exitosamente! Bienvenido/a ${input.name}`);
      router.push("/signin");
    } catch (error: any) {
      alert("Error al registrar");
      throw new Error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div className="bg-mainColorLight py-5 md:px-24 sm:px-8 px-8 rounded-lg shadow-sm shadow-black">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl text-center text-textColor font-bold">
            Registrate
          </h1>

          {registerForm.map(({ label, name, type, placeholder }) => {
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
            className="md:w-full w-4/5 h-11 bg-secondaryColor outline-none rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.1)] cursor-pointer text-base text-textColor font-bold hover:py-1 hover:px-4 hover:transition-all hover:bg-secondaryColorStrong"
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >
            Registrarme
          </button>
        </form>
        <div className="text-sm text-center mt-3 text-textColor">
          <p>
            ¿Ya tiene una cuenta?{" "}
            <Link
              className="text-textColor no-underline font-bold hover:cursor-pointer hover:text-secondaryColor"
              href="/signin"
            >
              Inicia Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
