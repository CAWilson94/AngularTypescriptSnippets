import { Component } from "@angular/core";
import { AnimalComponent } from "./animal.component";

@Component({
    selector: 'moose',
    templateUrl: './moose.component.html'
})

export class MooseComponent implements AnimalComponent{ 
}