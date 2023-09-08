import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../validators.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    `

#toolbar {

top: 0;
position: sticky;
z-index: 10;
}

  p{
    color: white;
  }
  .background{
    background-image: url("/assets/bgmath.jpeg");
    height: 100%
  }

  .container-custom{
    width: 50%
  }

  .row {
    margin-top: 20px
  }

  #inst{
    color: white;
  }

  h1 {
    color: white
  }
  `
  ]
})
export class RegisterComponent {

  constructor(private fb:FormBuilder, private ValidatorsService:ValidatorsService, private Router:Router){}

  registerForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3), Validators.pattern(this.ValidatorsService.namePattern)]],
    lastName: ["", [Validators.required, Validators.minLength(3), Validators.pattern(this.ValidatorsService.namePattern)]],
    institution: ["", [Validators.required, this.ValidatorsService.instValidator]],
    email: ["", [Validators.required, Validators.pattern(this.ValidatorsService.emailPattern)]],
    rol: ["Tu rol académico", [Validators.required]],
    password1: ["", [Validators.required]],
    password2: ["", [Validators.required]],
  },
  {
    validators: [
      this.ValidatorsService.equalPass('password1', 'password2')
    ]
  })

  onSave(){

      console.log(this.registerForm.invalid)
      console.log(this.registerForm.errors)

    
  } 

  toLogin(){
    this.Router.navigateByUrl('auth/login')
  }

  isValidField(field:string){
    return this.ValidatorsService.isValidField(this.registerForm, field)
  }

  getFieldError(field:string){
    return this.ValidatorsService.getFieldError(this.registerForm, field)
  }
}
