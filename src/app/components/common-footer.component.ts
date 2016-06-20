import { Component } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'common-footer',
  templateUrl: '../view/common/common-footer.component.html'
})
export class CommonFooterComponent {
  public text:string = "Copyright 2016";
}