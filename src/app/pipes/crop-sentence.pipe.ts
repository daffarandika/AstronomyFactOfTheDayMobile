import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropSentencePipe'
})
export class CropSentencePipe implements PipeTransform {

  transform(value: string): string {
    return `${value.split(' ').splice(0,50).join(' ')} ...`;
  }

}
