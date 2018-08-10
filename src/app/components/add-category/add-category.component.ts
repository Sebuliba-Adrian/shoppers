import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../../../entities/Category';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  @ViewChild('addCategoryForm') public addCategoryForm: NgForm;

  public model: Category;
  categoryId: any;
  constructor(private data: DataService, private router: Router, private _route: ActivatedRoute) {
    this._route.params.subscribe(params => this.categoryId = params.id);
   }

  ngOnInit() {
    this.model = new Category();
  }

  async addCategory() {
    const success = await this.data.createCategory(this.model);

    if (success) {
      this.router.navigateByUrl('/categories');
    } else {
      alert('Bad request');
    }

  }
  async editCategory() {
    const success = await this.data.editCategory(this.categoryId, this.model);

    if (success) {
      this.router.navigateByUrl('/categories');
    } else {
      alert('Bad request');
    }

  }

  navigateBack() {
    this.router.navigateByUrl('/categories');

  }

}
