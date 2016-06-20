import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES} from '@angular/router';

// importar componente
import { LandingPageComponent } from './components/landing-page.component';
import { PeliculasListComponent } from './components/peliculas-list.component';
import { FooterComponent } from './components/commons/footer.component';
import { NavComponent } from './components/commons/nav.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'view/app.component.html',
  // en directives indico que componente voy a utilizar
  directives: [
    ROUTER_DIRECTIVES, 
    LandingPageComponent, 
    PeliculasListComponent, 
    FooterComponent, 
    NavComponent
  ]
})

@Routes([
    {path: "/", component: LandingPageComponent},
    {path: "/peliculas", component: PeliculasListComponent}
]) 

export class AppComponent {
  public title:string;
}