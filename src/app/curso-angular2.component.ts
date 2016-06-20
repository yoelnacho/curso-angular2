import { Component } from '@angular/core';
// importar componente
import { PeliculasListComponent } from './components/peliculas-list.component';
 
@Component({
  moduleId: module.id,
  selector: 'curso-angular2-app',
  templateUrl: 'view/curso-angular2.component.html',
  styleUrls: ['styles/curso-angular2.component.css'],
  // en directives indico que componente voy a utilizar
  directives: [PeliculasListComponent]
})
export class CursoAngular2AppComponent {
  public title:string = "Titulo de la página";
}