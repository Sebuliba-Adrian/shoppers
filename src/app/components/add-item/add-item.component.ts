import { Component, OnInit } from '@angular/core';
import { User } from '../../../entities/User';
import { Item } from '../../../entities/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public model: Item;
  categoryId$: any;

  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) {
    this.route.params.subscribe(params => this.categoryId$ = params.id);
   }

  ngOnInit() {
    this.model = new Item();
  }

  async addItem() {
    const success = await this.data.addItem(this.categoryId$, this.model );

    if (success) {
      this.router.navigateByUrl(`categories/${this.categoryId$}`);
    } else {
      alert('Bad credentials.');
    }
  }


}
