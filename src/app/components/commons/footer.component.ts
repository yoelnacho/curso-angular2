import { Component } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'common-footer',
  templateUrl: '../../view/commons/footer.component.html'
})
export class FooterComponent {
  public text:string = "Copyright 2016";
}