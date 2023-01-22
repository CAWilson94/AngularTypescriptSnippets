import { Injectable } from '@angular/core';
import { AnimalStrategy } from './AnimalStrategy';

@Injectable({
  providedIn: 'any',
})
export class Jaguar implements AnimalStrategy {
  displayName(): string {
   return "My name is Jerry the Jaguar";
  }
  
}
