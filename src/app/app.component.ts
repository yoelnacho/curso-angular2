import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

// importar componente
import { FooterComponent } from './components/commons/footer.component';
import { NavComponent } from './components/commons/nav.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  // templateUrl: 'view/app.component.html',
  template: `
    <common-nav></common-nav>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
    <common-footer></common-footer>
  `,
  styleUrls: ['styles/general.css'],
  // en directives indico que componente voy a utilizar
  directives: [
    ROUTER_DIRECTIVES,
    FooterComponent, 
    NavComponent
  ]
})

export class AppComponent {
  public title:string;

  constructor(private route: ActivatedRoute) {}
  
}
