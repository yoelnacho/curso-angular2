import { Component } from '@angular/core';
// importar el modelo
import { Pelicula } from '../model/pelicula';

@Component({
    selector: 'peliculas-list',
    templateUrl: 'app/view/peliculas-list.component.html'
})
export class PeliculasListComponent {
    public mostrarDatos:boolean;
  
  // hay dos formas de indicar que tipo de array es:
  //public peliculas:Array<any>; // en este caso el arra puede ser de cualquier tipo
  public peliculas:Array<Pelicula>; // en este caso defino que el tipo de array es el definido en el modelo Pelicula.

  // guardo en pelicula el modelo Pelicula
  public pelicula:Pelicula;

  constructor(){
    this.mostrarDatos = false;

    // creo un objeto de pelicula tomando la matriz del modelo
    this.pelicula = new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);

    this.peliculas = [
      new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
      new Pelicula(2, "La verdad duele", "Will Smith", 2016),
      new Pelicula(3, "El señor de los anillos", "Desconocido", null),
      new Pelicula(4, "Una historia real", "Spilbergo", 2015),
      new Pelicula(5, "Don Jon", "Josep Gordon Levit", 2014)
    ]

    // lanzar una funcion
    this.debug();
  }

  // funcion debug para ver datos por consola.
  debug(title = null){
    // para ver en tiempor real como funciona del data-binding
    if(title != null){
      console.log(this.pelicula.title);
    } else {
      console.log(this.pelicula);
    }
    
  }

  onVisibility(){
    if(this.mostrarDatos === true){
      this.mostrarDatos = false;
    } else {
      this.mostrarDatos = true;
    }
  }

}