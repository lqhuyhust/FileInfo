import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { GetDataService } from './../../services/get-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  temp_data: any;
  categories: any = [];
  category: any = '';
  types: any = [];
  type_list: any = [];
  sortName: boolean = true;
  catId: any;

  constructor(
    private getData: GetDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.catId = +this.route.snapshot.params['id'];
  }


  ngOnInit(): void {
    this.getData.getAllCategories().subscribe(data => {
      this.temp_data = data;
      this.categories = this.temp_data['data'];
      this.category = this.categories.filter((el: { id: number; }) => el.id === this.catId)[0];
    })

    this.getData.getTypesByCategoryId(this.catId).subscribe(data => {
      this.temp_data = data;
      this.type_list = this.temp_data['data'];
      this.type_list = this.starClass(this.type_list);
      console.log(this.type_list);

    })

  }

  starClass(type_list: any) {
    type_list.forEach((el: any) => {
      var num = el.star / 0.5;
      num = Math.round(num)
      el['star_class'] = num > 9 ? 'five' : (num > 8 ? 'four-half' : (num > 7 ? 'four' : (num > 6 ? 'three-half' : (num > 5 ? 'three' : (num > 4 ? 'two-half' : (num > 3 ? 'two' : (num > 2 ? 'one-half' : (num > 1 ? 'one' : 'half'))))))));
    });
    return type_list;
  }

  sort(field: string) {
    if (this.sortName) {
      this.type_list = _.orderBy(this.type_list, [field], ['asc']);
    } else {
      this.type_list = _.orderBy(this.type_list, [field], ['desc']);
    }

    this.sortName = !this.sortName;
  }
}
