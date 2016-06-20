import { Component } from '@angular/core';
// importar el modelo
import { PeliculaModel } from '../model/pelicula.model';
import { PeliculasService } from '../services/peliculas.service';

@Component({
    selector: 'peliculas-list',
    templateUrl: 'app/view/peliculas-list.component.html',
    styleUrls: ['app/styles/peliculas-list.component.css'],
    // providers se utiliza para consumir un servicio
    providers: [PeliculasService]
})
export class PeliculasListComponent {
  public mostrarDatos:boolean;
  
  // hay dos formas de indicar que tipo de array es:
  //public peliculas:Array<any>; // en este caso el arra puede ser de cualquier tipo
  //public peliculas:Array<PeliculaModel>; // en este caso defino que el tipo de array es el definido en el modelo Pelicula.

  // guardo en pelicula el modelo Pelicula
  public pelicula:PeliculaModel;

  // pelicula que selecciono desde el DOM
  public selectedPelicula;

  // utilizar los datos del servicio
  public peliculas;

  // para poder consumir el servicio hay que llamarlo desde el constructor
  constructor(private _peliculasService: PeliculasService){
    
    // Datos del servicio obtenidos con get
    this.peliculas = this._peliculasService.getPeliculas();

    this.mostrarDatos = false;

    // indico el índice del array con el que quiero que muestre pelicula
    this.pelicula = this.peliculas[0]; // osea batman vs superman

    // lanzar una funcion
    //this.debug();
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