import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyBool'
})
export class PrettyBoolPipe implements PipeTransform {

  transform(value: boolean, messages?: string[]): string {
    if (!messages || messages.length <= 1) return value.toString();
    else return value ? messages[0] : messages[1];
  }
}
