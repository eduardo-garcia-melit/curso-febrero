import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    FormsModule,
    NgbModule,
    CommonModule,
    DirectivesModule,
    PipesModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    NgbModule,
    CommonModule,
    DirectivesModule,
    PipesModule,
    HttpClientModule
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}