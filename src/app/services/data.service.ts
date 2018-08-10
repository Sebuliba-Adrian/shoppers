import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { RequestOptions } from '@angular/http';
import { delay } from 'rxjs/operators';

const BACKEND_DOMAIN = 'http://localhost:8000';


@Injectable()
export class DataService {
  requestOptions: RequestOptions;

  constructor(private _http: HttpClient, private _token: TokenService) { }

  getCategories() {

    return this._http.get(this.buildURL('/api/v1/categories')).toPromise();

  }
  getCategory(categoryId) {
    return this._http.get(this.buildURL(`/api/v1/categories/${categoryId}`)).toPromise();
  }


  createCategory(category) {
    return this._http.post(this.buildURL('/api/v1/categories'), category).toPromise();
  }

  deletCategory(categoryId) {
    return this._http.delete(this.buildURL(`/api/v1/categories/${categoryId}`)).toPromise();
  }

  editCategory(categoryId, category) {
    return this._http.put(this.buildURL(`/api/v1/categories/${categoryId}`), category).toPromise();
  }

  getItems(categoryId) {
    return this._http.get(this.buildURL(`/api/v1/categories/${categoryId}/items`)).toPromise();
  }

  addItem(categoryId, item) {
    return this._http.post(this.buildURL(`/api/v1/categories/${categoryId}/items`), item).toPromise();

  }
  deleteItem(categoryId, itemId) {

    return this._http.delete(this.buildURL(`/api/v1/categories/${categoryId}/items/${itemId}`)).toPromise();

  }

  editItem(categoryId, itemId, item) {

    return this._http.put(this.buildURL(`/api/v1/categories/${categoryId}/items/${itemId}`), { item }).toPromise();

  }

  buildURL(path) {
    return BACKEND_DOMAIN + path;
  }


}
