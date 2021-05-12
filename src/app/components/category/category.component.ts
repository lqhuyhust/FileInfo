import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any = [];
  category: any = '';
  types: any = [];
  type_list: any = [];
  sortName: boolean = true;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }


  ngOnInit(): void {
    this.httpClient.get("/assets/json/categories.json").subscribe(data => {
      console.log(data);
      this.categories = data;
      this.category = this.categories.filter((el: { id: number; }) => el.id === +this.route.snapshot.params['id'])[0];
    });

    this.httpClient.get("/assets/json/types.json").subscribe(data => {
      this.types = data;
      this.type_list = this.types.filter((el: { category_id: number; }) => el.category_id === +this.route.snapshot.params['id']);
      console.log(this.type_list);
    });
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
