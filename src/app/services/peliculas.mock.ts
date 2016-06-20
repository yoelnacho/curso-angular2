import { PeliculaModel } from "../model/pelicula.model";

// Creamos una constante 'PELICULAS' que va a ser un array de objetos 
// con la estructura del modelo pelicula
export const PELICULAS: PeliculaModel[] = [
  new PeliculaModel(1, "Batman vs Superman", "Zack Snider", 2016),
  new PeliculaModel(2, "La verdad duele", "Will Smith", 2016),
  new PeliculaModel(3, "El señor de los anillos", "Desconocido", null),
  new PeliculaModel(4, "Una historia real", "Spilbergo", 2015),
  new PeliculaModel(5, "Don Jon", "Josep Gordon Levit", 2014),
  new PeliculaModel(6, "Don Jon2", "yo", 2015)
];