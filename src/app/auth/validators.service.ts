import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
  public namePattern:string = '^([a-zA-Z]|\s)*$'

  constructor() { }

  equalPass(field1: string, field2:string){

    //Aquí es como una función callback, porque esta función no sólo me sirve para los dos campos. Tengo que hacer que sirva para cualquier form, que es el formGroup que se ingresa como argumento en la función interna. Será que funciona metiéndolo como tercer argumento?
    //el tercer argumento se lo doy agregandolo al segundo objeto del form builder
    return(form: FormGroup): ValidationErrors | null => {

      const value1 = form.get(field1)?.value
      const value2 = form.get(field2)?.value

      if(value1 !== value2 && form.controls[field2].touched){
        form.get(field2)?.setErrors({notEqual: true})
      } else {
        form.get(field2)?.setErrors(null)
      }

      if(form.get(field2)?.errors) return {notEqual : true}
      return null


    }
  }
  //Validador personalizado

// es como function expression?
  public instValidator =
     (control: AbstractControl): ValidationErrors | null => {
      const value:string = control.value.trim().toLowerCase()
  
          if(value === 'universidad de la vida'){
        return { inst: true };
      }  else return null
    }
  
    //Mostrar errores

public isValidField(form: FormGroup, field:string):boolean | null{
  return form.controls[field].errors 
  && form.controls[field].touched
}

 //diferentes errores en un solo campo
getFieldError(form: FormGroup, field:string): string | null {  
  if (!form.controls[field] ) return null  
    
  const errors = form.controls[field].errors || {}  
    
  for (const key of Object.keys(errors)) {  
  switch(key){  
  case 'required':  
  return 'Este campo es requerido'  
  case 'minlength':  
  return "Debe tener mínimo 3 letras"  
  case 'inst':
  return 'Debes ingresar una institución válida'
  case 'notEqual':
  return 'Las contraseñas deben coincidir'
  default:  
  return null  
  }  
  }  
  return null  
  }
  
}

