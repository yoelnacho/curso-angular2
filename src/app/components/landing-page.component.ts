import { Component } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'landing-page',
  templateUrl: '../view/landing-page.component.html'
})

export class LandingPageComponent {
  public title:string = "Hola Mundo!";
}