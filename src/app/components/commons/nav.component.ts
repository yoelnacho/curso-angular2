import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
 
@Component({
  moduleId: module.id,
  selector: 'common-nav',
  templateUrl: '../../view/commons/nav.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NavComponent {
  
}