import { Component } from '@angular/core';
import { Link, } from '../../interfaces/stats.interfaces';

@Component({
  templateUrl: './layout-page.component.html',
  styles: [ `

.example-spacer {
  flex: 1 1 auto;
}

  #toolbar {

  top: 0;
  position: sticky;
  z-index: 10;
  }

mat-sidenav-content{

}

mat-sidenav-container{
background-color: transparent;
height: 100%;
background-image: url("/assets/bgmath.jpeg")
}
mat-sidenav{
width: 20%;
background-color: #3f51b5;
}


.center-item{
  display:flex;
  align-items:center;
  justify-content:center;
  color: white;
}
  `
  ]
})
export class LayoutPageComponent {

  public Links: Link[] = [
    {name: 'Ingresar',
    url: '/auth/login',
    icon: 'login'},
    {name: 'Inicio',
    url: '/stats/stathome',
    icon: 'face'},
    {name: 'Nuevo estadístico',
    url: '/stats/statnew',
    icon: 'assignment_ind'},
  ]

}
