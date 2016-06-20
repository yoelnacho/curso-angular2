import { Component } from '@angular/core';
// importar el modelo
import { PeliculaModel } from '../model/pelicula';

@Component({
    selector: 'peliculas-list',
    templateUrl: 'app/view/peliculas-list.component.html',
    styleUrls: ['app/styles/peliculas-list.component.css']
})
export class PeliculasListComponent {
    public mostrarDatos:boolean;
  
  // hay dos formas de indicar que tipo de array es:
  //public peliculas:Array<any>; // en este caso el arra puede ser de cualquier tipo
  public peliculas:Array<PeliculaModel>; // en este caso defino que el tipo de array es el definido en el modelo Pelicula.

  // guardo en pelicula el modelo Pelicula
  public pelicula:PeliculaModel;

  // pelicula que selecciono desde el DOM
  public selectedPelicula;

  constructor(){
    this.mostrarDatos = false;

    this.peliculas = [
      new PeliculaModel(1, "Batman vs Superman", "Zack Snider", 2016),
      new PeliculaModel(2, "La verdad duele", "Will Smith", 2016),
      new PeliculaModel(3, "El señor de los anillos", "Desconocido", null),
      new PeliculaModel(4, "Una historia real", "Spilbergo", 2015),
      new PeliculaModel(5, "Don Jon", "Josep Gordon Levit", 2014)
    ];

    // indico el índice del array con el que quiero que muestre pelicula
    this.pelicula = this.peliculas[0]; // osea batman vs superman

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

  // al seleccionar un título, indico cual película 
  onSelect(value){
    this.selectedPelicula = value;

    console.log(this.selectedPelicula);
  }

  onVisibility(){
    if(this.mostrarDatos === true){
      this.mostrarDatos = false;
    } else {
      this.mostrarDatos = true;
    }
  }

}