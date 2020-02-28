import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[appMinValue]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValueDirective, multi: true }]
})
export class MinValueDirective implements Validator {
  @Input('appMinValue') minValue: number;
  
  constructor() { }

  validate(formControl: FormControl): ValidationErrors {
    if ((!this.minValue && this.minValue != 0) || isNaN(this.minValue)) return null;
    else return this.isMinValue(this.minValue)(formControl);
  }

  isMinValue(minValue: number) {
    return (formControl: FormControl) => {
      const inputValue = formControl.value;
      if ((!inputValue && inputValue != 0) || isNaN(inputValue)) return null;

      return (inputValue < minValue) ? { minValue: true } : { minValue: false };
    }
  }

}
