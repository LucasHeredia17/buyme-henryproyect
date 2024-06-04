const registerForm = [
  {
    label: "Nombre:",
    name: "name",
    type: "text",
    placeholder: "Ingresa tu nombre.",
  },
  {
    label: "Dirección:",
    name: "address",
    type: "text",
    placeholder: "Ingresa tu direccion.",
  },
  {
    label: "Telefono:",
    name: "phone",
    type: "number",
    placeholder: "Ingresa tu telefono. (Ej: 1234567890)",
  },
  {
    label: "Email:",
    name: "email",
    type: "email",
    placeholder: "Ingresa tu email.",
  },
  {
    label: "Contraseña:",
    name: "password",
    type: "password",
    placeholder: "Ingresa tu contraseña.",
  },
  {
    label: "Confirma tu Contraseña:",
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirma tu contraseña.",
  },
];

const loginForm = [
  {
    label: "Email:",
    name: "email",
    type: "email",
    placeholder: "Ingresa tu email.",
  },
  {
    label: "Contraseña:",
    name: "password",
    type: "password",
    placeholder: "Ingresa tu contraseña.",
  },
];

export { registerForm, loginForm };
