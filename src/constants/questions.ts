import { IQuestion } from "@/interfaces";

export const questions: IQuestion[] = [
  {
    id: 1,
    title: "Cómo se llama el polígono de siete lados.",
    points: 2,
    options: [
      {
        id: 1,
        option: "Pentágono",
        isCorrectOption: false,
      },
      {
        id: 2,
        option: "Septágono",
        isCorrectOption: false,
      },
      {
        id: 3,
        option: "Heptágono",
        isCorrectOption: true,
      },
      {
        id: 4,
        option: "Hexágono",
        isCorrectOption: false,
      },
    ],
  },
  {
    id: 2,
    title: "Cuál es el nombre del triángulo que tiene todos los lados iguales",
    points: 2,
    options: [
      {
        id: 1,
        option: "Equilátero",
        isCorrectOption: true,
      },
      {
        id: 2,
        option: "Isósceles",
        isCorrectOption: false,
      },
      {
        id: 3,
        option: "Escaleno",
        isCorrectOption: false,
      },
      {
        id: 4,
        option: "Ninguna de las anteriores",
        isCorrectOption: false,
      },
    ],
  },
  {
    id: 3,
    title: "Cuántos meses tiene un trimestre.",
    points: 2,
    options: [
      {
        id: 1,
        option: "2 meses",
        isCorrectOption: false,
      },
      {
        id: 2,
        option: "3 meses",
        isCorrectOption: true,
      },
      {
        id: 3,
        option: "4 meses",
        isCorrectOption: false,
      },
      {
        id: 4,
        option: "Ninguna de las anteriores",
        isCorrectOption: false,
      },
    ],
  },
  {
    id: 4,
    title:
      "Juan tiene 10 años, Marcos tienes 5 más que Juan y Pepito tiene 3 menos que Juan. ¿Cuántos años tiene Pepito?",
    points: 4,
    options: [
      {
        id: 1,
        option: "12 años",
        isCorrectOption: false,
      },
      {
        id: 2,
        option: "7 años",
        isCorrectOption: true,
      },
      {
        id: 3,
        option: "2 años",
        isCorrectOption: false,
      },
    ],
  },
  {
    id: 5,
    title: "Si el radio de un círculo mide 25 cm, ¿Cuánto mide su diámetro?",
    points: 2,
    options: [
      {
        id: 1,
        option: "0.50 m",
        isCorrectOption: true,
      },
      {
        id: 2,
        option: "50 mm",
        isCorrectOption: false,
      },
      {
        id: 3,
        option: "25 cm",
        isCorrectOption: false,
      },
      {
        id: 4,
        option: "50π cm",
        isCorrectOption: false,
      },
    ],
  },
  {
    id: 6,
    title:
      "¿Qué distancia recorrerá un tren en 7 horas horas si va a 80 Km/hora?",
    points: 4,
    options: [
      {
        id: 1,
        option: "500 km",
        isCorrectOption: false,
      },
      {
        id: 2,
        option: "5600 km",
        isCorrectOption: false,
      },
      {
        id: 3,
        option: "560 km",
        isCorrectOption: true,
      },
      {
        id: 4,
        option: "490 km",
        isCorrectOption: false,
      },
    ],
  },
];
