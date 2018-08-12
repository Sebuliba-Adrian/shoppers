import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../../entities/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  user$: Object;
  categories: Category[];

  constructor(private data: DataService, private _router: Router, private _route: ActivatedRoute) {
    this.categories = this._route.snapshot.data['categories'].data;

  }

  ngOnInit() {
    // this.getCategories();
  }


  async deleteCategory(categoryId) {
    try {
      const success = await this.data.deletCategory(categoryId);
      this.getCategories();
    } catch (error) {
      alert('Bad request');
    }

  }


  async getCategories() {
    const success = await this.data.getCategories();

    if (success) {
      this.categories = success['data'];
    } else {
      alert('Bad credentials.');
    }
  }

  displayItems(id) {

    this._router.navigateByUrl(`categories/${id}`);

  }
  editCategory(categoryId) {
    this._router.navigate(['/add-category', categoryId]);
  }


}
