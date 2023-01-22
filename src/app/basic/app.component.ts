import { Component } from '@angular/core';
import { AnimalContext } from '../strategy/AnimalContext';
import { Chicken } from '../strategy/Chicken';
import { Jaguar } from '../strategy/Jaguar';
import { Moose } from '../strategy/Moose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '2023jan';
  chickenStrats = new Chicken();
  jaguarStrats = new Jaguar();
  mooseStrats = new Moose();

  messagefromAnimal: string = "No Message yet!";

  context = new AnimalContext(this.jaguarStrats);
  getName() {
    return this.context.doSomeMagicThing();
  } 
  
  messageHandler(message: string) { 
    this.messagefromAnimal = message;
  }
}
