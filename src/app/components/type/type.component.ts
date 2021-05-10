import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  categories: any = [];
  types: any = [];
  type: any;
  pre: any;
  next: any = {};
  num_id: any = {};

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
    this.httpClient.get("/assets/json/types.json").subscribe(data => {
      this.types = data;
      this.num_id = +this.route.snapshot.params['id'];
      this.type = this.types.find((el: { id: number; }) => el.id === this.num_id);
      this.pre = this.types.find((el: { id: number; }) => el.id === this.num_id - 1);
      this.next = this.types.find((el: { id: number; }) => el.id === this.num_id + 1);
    });
  }



}
