import { Component } from "@angular/core";
import { DetailedService } from "./detailed.service";
import { GroupComponent } from "./group.component";

@Component({
    selector: 'app-root',
    templateUrl: './detailed.component.html'
})

export class DetailedComponent implements GroupComponent{
    animalType: string; 
    service: DetailedService;
    // this will be a detailed horizontal layout tile
    constructor(animalType: string){ 
        this.animalType = animalType;
        this.service = new DetailedService(animalType);
    }
}