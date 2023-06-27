import * as Yup from "yup";
import { firstName, lastName, email } from "./user";

const dni = Yup.string()
  .required("DNI es requerido")
  .min(5, "DNI tiene al menos 5 carácteres");

const onlyNumberRegExp = /^[0-9\b]+$/;

const phone = Yup.string()
  .required("Número celular es requerido")
  .matches(onlyNumberRegExp, "Ingresa solo números")
  .typeError("Ingresa tu número celular")
  .min(9, "Celular tiene al menos 9 dígitos");

const paymentMethod = Yup.string().required("Método de pago es requerido");

const guests = Yup.array()
  .test("notEmpty", "Debes de agregar al menos un huésped", function (value) {
    return value && value.length > 0;
  })
  .required("Huésped/es es  un campo es obligatorio");

export const guestValidation = Yup.object({
  firstName,
  lastName,
  email,
  dni,
});

export const bookingValidation = Yup.object({
  firstName,
  lastName,
  email,
  phone,
  paymentMethod,
  guests,
});
