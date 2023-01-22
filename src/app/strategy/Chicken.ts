import { Injectable } from '@angular/core';
import { AnimalStrategy } from './AnimalStrategy';

@Injectable({
  providedIn: 'any',
})
export class Chicken implements AnimalStrategy {
  displayName(): string {
   return "My name is Clive the Chicken";
  }
  
}
