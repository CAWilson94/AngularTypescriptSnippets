import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './basic/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalComponent } from './animal.component';
import { GroupComponent } from './animalGroups/group.component';
import {BasicComponent} from './animalGroups/basic.component';
import {DetailedComponent} from './animalGroups/detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    AnimalComponent,
    DetailedComponent,
    BasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
