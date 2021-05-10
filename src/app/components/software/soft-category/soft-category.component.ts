import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soft-category',
  templateUrl: './soft-category.component.html',
  styleUrls: ['./soft-category.component.css']
})
export class SoftCategoryComponent implements OnInit {

  categories: any = [];
  softwares: any = [];
  soft_list: any = [];

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
    this.httpClient.get("/assets/json/soft-categories.json").subscribe(data => {
      console.log(data);
      this.categories = data;
    });

    this.httpClient.get("/assets/json/softwares.json").subscribe(data => {
      this.softwares = data;
      this.soft_list = this.softwares.filter((el: { category_id: number; }) => el.category_id === +this.route.snapshot.params['id']);
      console.log(this.soft_list);
    });
  }

}
