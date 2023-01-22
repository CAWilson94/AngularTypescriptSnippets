import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasicService {
  animalType: string;

  constructor(animalType: string) {
    this.animalType = animalType;
  }

  public returnData(): void {
    console.log(
      'this is a BASIC method call for animal type: ' + this.animalType
    );
  }
}
