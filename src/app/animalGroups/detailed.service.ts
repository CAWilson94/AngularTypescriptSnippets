import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailedService {
  animalType: string;

  constructor(animalType: string) {
    this.animalType = animalType;
  }

  public returnData(): void {
    console.log('this is a method call for animal type: ' + this.animalType);
  }
}
