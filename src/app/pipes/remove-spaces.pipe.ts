import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: any): any {
    return (typeof value === 'string') ? value.replace(/ /g, '') : value;
  }

}
