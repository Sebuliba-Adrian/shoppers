import { Injectable } from '@angular/core';
import { CanDeactivate } from '../../../node_modules/@angular/router';
import { AddCategoryComponent } from '../components/add-category/add-category.component';

@Injectable()
export class NavigateAwayGuardService implements CanDeactivate<AddCategoryComponent> {

  constructor() { }

  canDeactivate(component: AddCategoryComponent): boolean {
    if (component.model.name) {
     return confirm('Are you sure you want to discard your changes?');
    }

    return true;

  }

}
