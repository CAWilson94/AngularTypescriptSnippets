import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './basic/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputExample } from './basic/inputexample.component';
import { GaugeModule } from 'angular-gauge';
import { ChickenComponent } from './chicken.component';
import { MooseComponent } from './moose.component';

@NgModule({
  declarations: [
    AppComponent,
    InputExample, 
    ChickenComponent,
    MooseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule,
    GaugeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
