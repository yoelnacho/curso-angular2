import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES} from '@angular/router';

// importar componente
import { LandingPageComponent } from './components/landing-page.component';
import { PeliculasListComponent } from './components/peliculas-list.component';
import { CommonFooterComponent } from './components/common-footer.component';
import { CommonNavComponent } from './components/common-nav.component';

@Component({
  moduleId: module.id,
  selector: 'curso-angular2-app',
  templateUrl: 'view/curso-angular2.component.html',
  styleUrls: ['styles/curso-angular2.component.css'],
  // en directives indico que componente voy a utilizar
  directives: [
    ROUTER_DIRECTIVES, 
    LandingPageComponent, 
    PeliculasListComponent, 
    CommonFooterComponent, 
    CommonNavComponent
  ]
})

@Routes([
    {path: "/", component: LandingPageComponent},
    {path: "/peliculas", component: PeliculasListComponent}
]) 

export class CursoAngular2AppComponent {
}