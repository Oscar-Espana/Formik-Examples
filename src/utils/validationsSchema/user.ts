import { civilStatus as civilStatusUser } from "@/constants/user";
import * as Yup from "yup";

const firstName = Yup.string().required("Nombre es requerido");

const lastName = Yup.string().required("Apellido es requerido");

const email = Yup.string()
  .email("Correo inválido")
  .max(50, "Correo es muy grander")
  .required("Correo es requerido");

const age = Yup.number()
  .min(0, "Edad no puede ser menor a 0")
  .max(125, "Edad no puede ser mayor a 125")
  .required("Edad es requerido");

const optionsCivilStatusUser = [...civilStatusUser] as const;

const civilStatus = Yup.string()
  .oneOf(optionsCivilStatusUser, "Estado civil inválido")
  .required("Estado civil es requerido");

const gender = Yup.string().required("Género es requerido");

export const userValidation = Yup.object({
  firstName,
  lastName,
  email,
  age,
  civilStatus,
  gender,
});
