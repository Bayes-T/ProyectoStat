import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: [ `
  p{
    color: white;
  }
  .background{
    background-image: url("/assets/bgmath.jpeg");
    height: 100%
  }
  `
  ]
})
export class ErrorPageComponent {

}
