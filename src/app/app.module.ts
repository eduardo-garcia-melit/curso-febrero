import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MinigameComponent } from './minigame/minigame.component';
import { HomeComponent } from './home/home.component';
import { ThermometerComponent } from './thermometer/thermometer.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MinigameComponent,
    HomeComponent,
    ThermometerComponent,
    DataTableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
