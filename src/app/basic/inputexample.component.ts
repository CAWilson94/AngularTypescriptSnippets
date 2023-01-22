import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-example',
    templateUrl: 'input-example.component.html'
})
export class InputExample {
    @Output() animalNameEvent = new EventEmitter();
    
    onButtonClick(){ 
        this.animalNameEvent.emit('animal name clicked');
    }
}
