import { Component } from '@angular/core';
// importar el modelo
import { Pelicula } from './model/pelicula';
 
@Component({
  moduleId: module.id,
  selector: 'curso-angular2-app',
  templateUrl: 'view/curso-angular2.component.html',
  styleUrls: ['curso-angular2.component.css']
})
export class CursoAngular2AppComponent {
  public title:string = "Titulo de la página";
  public mostrarDatos:boolean;

  // guardo en pelicula el modelo Pelicula
  public pelicula:Pelicula;

  constructor(){
    this.mostrarDatos = false;

    // creo un objeto de pelicula tomando la matriz del modelo
    this.pelicula = new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);

    // lanzar una funcion
    this.debug();
  }

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