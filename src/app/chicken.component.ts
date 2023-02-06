import { Component } from "@angular/core";
import { AnimalComponent } from "./animal.component";

@Component({
    selector: 'chicken',
    templateUrl: './chicken.component.html',
    styleUrls:['./chicken.component.css']
})

export class ChickenComponent implements AnimalComponent{ 
    /** 
     * representing a collapsed E component
     */
    
}