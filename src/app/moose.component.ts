import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { AnimalComponent } from "./animal.component";

@Component({
    selector: 'moose',
    templateUrl: './moose.component.html',
    styleUrls: ['./Moose.component.css'],
})

export class MooseComponent implements AnimalComponent{ 

}