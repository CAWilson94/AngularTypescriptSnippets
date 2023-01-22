import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-directive]'
})
export class DynamicDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}