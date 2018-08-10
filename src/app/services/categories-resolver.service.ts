import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Category } from '../../entities/Category';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';

@Injectable()
export class CategoriesResolverService implements Resolve<object> {
  constructor(private _dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<object> {

    return this._dataService.getCategories();

  }

}
