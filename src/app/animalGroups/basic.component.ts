import { Component } from "@angular/core";
import { GroupComponent } from "./group.component";

@Component({
    selector: 'app-root',
    templateUrl: './basic.component.html'
})

export class BasicComponent implements GroupComponent{ 
    // this will be a basic vertical layout tile 
    animalType: string; 
    constructor(animalType: string){ 
        this.animalType = animalType;
    }
}