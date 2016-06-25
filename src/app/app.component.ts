import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

// importar componente
import { LandingPageComponent } from './components/landing-page.component';
import { TodoComponent } from './components/todo.component';
import { PeliculasListComponent } from './components/peliculas-list.component';
import { FooterComponent } from './components/commons/footer.component';
import { NavComponent } from './components/commons/nav.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'view/app.component.html',
  styleUrls: ['styles/general.css'],
  // en directives indico que componente voy a utilizar
  directives: [
    ROUTER_DIRECTIVES, 
    TodoComponent,
    LandingPageComponent, 
    PeliculasListComponent, 
    FooterComponent, 
    NavComponent
  ]
})

@Routes([
    {path: "/", component: LandingPageComponent},
    {path: "peliculas", component: PeliculasListComponent},
    {path: "todo", component: TodoComponent}
]) 

export class AppComponent{
  public title:string;

  constructor(public router: Router){ }
}