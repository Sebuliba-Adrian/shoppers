import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CategoriesComponent } from '../categories/categories.component';
import { Category } from '../../../entities/Category';
import { Item } from '../../../entities/Item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  categoryId$: any;
  items: Item[];
  itemRoute: string;

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.categoryId$ = params.id);
  }

  ngOnInit() {
    this.getItems();
    this.itemRoute = `categories/${this.categoryId$}/add-item`;
  }

  async getItems() {
    const success = await this.data.getItems(this.categoryId$);

    if (success) {
      this.items = success['data'];
    } else {
      alert('Bad credentials.');
    }
  }

  async deleteItem(itemId) {
    const success = await this.data.deleteItem(this.categoryId$, itemId);

    if (success) {
      this.getItems();
    } else {
      alert('Bad credentials.');
    }
  }

  onClick() {

    this.router.navigateByUrl(this.itemRoute);
  }
  goToCategories() {
    this.router.navigateByUrl('/categories');
  }


}
