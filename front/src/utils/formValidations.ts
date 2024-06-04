import {
  ILoginErrorForm,
  ILoginForm,
  IRegisterErrorForm,
  IRegisterForm,
} from "@/app/types";

const loginValidation = (input: ILoginForm): ILoginErrorForm => {
  const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let errors: ILoginErrorForm = {};

  //* EMAIL
  if (!input.email) errors.email = "Debe ingresar un email.";
  else {
    if (!emailRegExp.test(input.email))
      errors.email = "Debe ingresar un email válido.";
  }

  //* PASSWORD
  if (!input.password) errors.password = "Debe ingresar su contraseña.";
  else {
    if (input.password.length < 4)
      errors.password = "La contraseña debe tener al menos 4 carácteres.";
  }

  return errors;
};

const registerValidation = (input: IRegisterForm): IRegisterErrorForm => {
  const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passMinRegExp = /[a-z]/;
  const passMayusRegExp = /[A-Z]/;
  const passNumRegExp = /[0-9]/;
  let errors: IRegisterErrorForm = {};

  //* NAME
  if (!input.name) errors.name = "Debe ingresar un nombre.";
  else {
    if (input.name.length < 3)
      errors.name = "El nombre debe tener al menos 3 carácteres.";
    if (input.name.length > 25)
      errors.name = "El nombre debe tener menos de 25 carácteres.";
  }

  //* EMAIL
  if (!input.email) errors.email = "Debe ingresar un email.";
  else {
    if (!emailRegExp.test(input.email))
      errors.email = "Debe ingresar un email válido.";
  }

  //* ADDRESS
  if (!input.address) errors.address = "Debe ingresar una dirección.";
  else {
    if (input.address.length < 3)
      errors.address = "La dirección debe tener al menos 3 carácteres.";
    if (input.address.length > 25)
      errors.address = "La dirección debe tener menos de 25 carácteres.";
  }

  //* PHONE
  if (!input.phone) errors.phone = "Debe ingresar un telefono.";
  else {
    if (input.phone.length < 10)
      errors.phone = "El telefono debe tener al menos 10 carácteres.";
    if (input.phone.length > 10)
      errors.phone = "El telefono debe tener menos de 10 carácteres.";
  }

  //* PASSWORD
  if (!input.password) errors.password = "Debe ingresar una contraseña.";
  else {
    if (input.password.length < 4)
      errors.password = "La contraseña debe tener al menos 4 carácteres.";
    if (input.password.length > 15)
      errors.password = "La contraseña debe tener menos de 15 carácteres.";
    if (!passMinRegExp.test(input.password))
      errors.password = "La contraseña debe tener al menos una minúscula.";
    if (!passMayusRegExp.test(input.password))
      errors.password = "La contraseña debe tener al menos una mayúscula.";
    if (!passNumRegExp.test(input.password))
      errors.password = "La contraseña debe tener al menos un número.";
  }

  //* CONFIRM PASSWORD
  if (!input.confirmPassword)
    errors.confirmPassword = "Debe re-ingresar su contraseña.";
  else {
    if (input.password !== input.confirmPassword)
      errors.confirmPassword = "Las contraseñas no coinciden.";
  }

  return errors;
};

export { loginValidation, registerValidation };
