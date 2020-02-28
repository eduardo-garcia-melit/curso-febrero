import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { MustMatchDirective } from './must-match.directive';
import { MinValueDirective } from './min-value.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    MustMatchDirective,
    MinValueDirective
  ],
  exports: [
    HighlightDirective,
    MustMatchDirective,
    MinValueDirective
  ]
})
export class DirectivesModule { }
