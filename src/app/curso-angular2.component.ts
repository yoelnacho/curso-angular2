import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'curso-angular2-app',
  templateUrl: 'curso-angular2.component.html',
  styleUrls: ['curso-angular2.component.css']
})
export class CursoAngular2AppComponent {
  title:string = 'curso-angular2 works!';
  anio:number = 2016;
  activo:boolean = true;
}