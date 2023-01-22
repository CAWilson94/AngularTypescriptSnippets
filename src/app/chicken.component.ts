import { Component } from "@angular/core";
import { AnimalComponent } from "./animal.component";

@Component({
    selector: 'chicken',
    templateUrl: './chicken.component.html'
})

export class ChickenComponent implements AnimalComponent{ 
    
}