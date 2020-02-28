import { NgModule } from '@angular/core';
import { ExponentialPipe } from './exponential.pipe';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { PrettyBoolPipe } from './pretty-bool.pipe';



@NgModule({
  declarations: [
    ExponentialPipe,
    RemoveSpacesPipe,
    PrettyBoolPipe
  ],
  exports: [
    ExponentialPipe,
    RemoveSpacesPipe,
    PrettyBoolPipe
  ]
})
export class PipesModule { }
