import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AnimalComponent } from '../animal.component';
import { ChickenComponent } from '../chicken.component';
import { MooseComponent } from '../moose.component';

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

  private animalTypeFactory(type: String): Type<AnimalComponent> {
    console.log(type);
    let component: Type<AnimalComponent>;
    if (type == 'chicken') {
      component = ChickenComponent;
    } else if (type == 'moose') {
      component = MooseComponent;
    } else {
      component = ChickenComponent;
    }
    console.log(component);
    return component;
  }

  private loadComponent(): void {
    //this.viewRef.createComponent(ChickenComponent);
    
    this.viewRef.createComponent<AnimalComponent>(
      this.animalTypeFactory('chicken')
    );
    
  }
}
