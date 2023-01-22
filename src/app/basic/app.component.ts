import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AnimalComponent } from '../animal.component';
import { BasicComponent } from '../animalGroups/basic.component';
import { DetailedComponent } from '../animalGroups/detailed.component';
import { GroupComponent } from '../animalGroups/group.component';
import { ChickenComponent } from '../chicken.component';
import { MooseComponent } from '../moose.component';


interface AnimalCard { 
  cardType: string;
  animalType: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // tell viewChild to load 'container' and read it as a container ref
  // this allows us to use the createComponent methods
  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;

  public ngAfterViewInit(): void {
    this.loadComponent();
  }

  private animalTypeFactory(type: AnimalCard): Type<GroupComponent> {
    // TODO: replace this with a strategy pattern
    /*
    let component: Type<AnimalComponent>;
    if (type == 'chicken') {
      component = basicComponent;
    } else if (type == 'moose') {
      component = MooseComponent;
    } else {
      component = ChickenComponent;
    }

    return component;
  }
  */

  let component: Type<GroupComponent>
  // the idea jere being it will return all three as a basis otherwise detailed
  if(type.cardType == 'overview') {
    component = BasicComponent; // this will give all 3 side by side
  }else { 
    component = DetailedComponent; // find a way to change the strategy here by passing in the animal type
  }
  return component;
  }

  private loadComponent(): void {
    this.viewRef.createComponent<GroupComponent>(
      this.animalTypeFactory({cardType: 'overview', animalType: 'chicken'}),
    );
  }
}
