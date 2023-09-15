import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(name: string): string {
    const array = name.split(" ")
    return array[1]
    
  }

}
