import { provideRouter, RouterConfig } from '@angular/router';
import { LandingPageComponent } from './components/landing-page.component';
import { TodoComponent } from './components/todo.component';
import { PeliculasListComponent } from './components/peliculas-list.component';

export const routes: RouterConfig = [
  {path: "", component: LandingPageComponent},
  {path: "peliculas", component: PeliculasListComponent},
  {path: "todo", component: TodoComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];