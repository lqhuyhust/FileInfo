import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any = [];
  types: any = [];
  type_list: any = [];

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.httpClient.get("/assets/json/categories.json").subscribe(data => {
      console.log(data);
      this.categories = data;
    });

    this.httpClient.get("/assets/json/types.json").subscribe(data => {
      this.types = data;
      this.type_list = this.types.filter((el: { category_id: number; }) => el.category_id === +this.route.snapshot.params['id']);
      console.log(this.type_list);
    });
  }

}
