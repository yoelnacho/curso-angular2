import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'curso-angular2-app',
  templateUrl: 'view/curso-angular2.component.html',
  styleUrls: ['curso-angular2.component.css']
})
export class CursoAngular2AppComponent {
  title:string = "Titulo de la página";

  pelicula:string;
  anio:number;
  activo:boolean;

  constructor(){
    this.pelicula = "Batman vs Superman";
    this.anio = 2016;
    this.activo = true;
    // lanzar una funcion
    // this.holaMundo();
  }

  holaMundo(){
    console.log(this.pelicula);
  }

}