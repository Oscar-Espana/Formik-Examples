import * as Yup from "yup";

const country = Yup.object().nullable().required("País es requerido");

const city = Yup.object().nullable().required("Ciudad es requerido");

const budget = Yup.number()
  .min(0, "Presupuesto no puede ser menor a 0")
  .required("Presupuesto es requerido");

const activities = Yup.array().min(2, "Escoja al menos dos actividades");

export const tripValidation = Yup.object({
  country,
  city,
  budget,
  activities,
});
