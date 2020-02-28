import { Directive, Input } from '@angular/core';
import { Validator, ValidationErrors, NG_VALIDATORS, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appMustMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validator{
  @Input('appMustMatch') values: string[] = [];

  constructor() { }

  validate(formGroup: FormGroup) : ValidationErrors {
    if (this.values.length <= 1) return null;
    else return this.mustMatch(this.values)(formGroup);
  }

  mustMatch(controlsNames) {
    return (formGroup: FormGroup) => {
      const firstControlName = controlsNames[0];
      const secondControlName = controlsNames[1];
      
      const control = formGroup.controls[firstControlName];
      const matchingControl = formGroup.controls[secondControlName];

      if (!control || !matchingControl) return null;

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        return null;
      }
    }
  }

}
