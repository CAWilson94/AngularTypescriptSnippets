import { Injectable } from '@angular/core';
import { AnimalStrategy } from './AnimalStrategy';

@Injectable({
  providedIn: 'any',
})
export class Moose implements AnimalStrategy {
  displayName(): string {
   return "My name is Marshall the Moose";
  }
  
}
