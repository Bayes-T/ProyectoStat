import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topics'
})
export class TopicsPipe implements PipeTransform {

  transform(value: string[] | undefined): string {
    
    let resultado = value![0]

    for(let i=1; i<value!.length; i++){
      if(i < value!.length - 1){
        resultado += ", " + value![0+i] 
      } else {
        resultado += " y " + value![0+i]
      }
    }
    return resultado
  }

}
