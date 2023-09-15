import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from '../validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [ `
    .background{
    background-image: url("/assets/bgmath.jpeg");
    height: 100%
  }

  #toolbar {

top: 0;
position: sticky;
z-index: 10;
}
  `
  ]
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private router: Router, private validatorsService: ValidatorsService){}

  loginForm = this.fb.group({
    email : ["", [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  })

  isValidField(field:string){
    return this.validatorsService.isValidField(this.loginForm, field)
  }

  getFieldError(field:string){
    return this.validatorsService.getFieldError(this.loginForm, field)
  }

  onSave(){
    this.router.navigateByUrl('/stats/stathome')
  }
}
