import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soft-group',
  templateUrl: './soft-group.component.html',
  styleUrls: ['./soft-group.component.css']
})
export class SoftGroupComponent implements OnInit {

  softwares: any = [];
  soft_list: any = [];
  pre: any = {};
  next: any = {};
  num_id: any = {};
  companies: any = [];
  group: any = {};

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.num_id = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.httpClient.get("/assets/json/softwares.json").subscribe(data => {
      this.softwares = data;
      this.soft_list = this.softwares.filter((el: { group_id: number; }) => el.group_id === +this.route.snapshot.params['id']);
    });

    this.httpClient.get("/assets/json/companies.json").subscribe(data => {
      this.companies = data;
      this.group = this.companies.filter((el: { id: number; }) => el.id === +this.route.snapshot.params['id'])[0];
      console.log(this.group);

      if (this.num_id == this.companies[0].id) {
        this.pre = this.companies[this.companies.length - 1];
      } else {
        this.pre = this.companies.find((el: { id: number; }) => el.id === this.num_id - 1);
      }
      if (this.num_id == this.companies[this.companies.length - 1].id) {
        this.next = this.companies[0];
      } else {
        this.next = this.companies.find((el: { id: number; }) => el.id === this.num_id + 1);
      }
    })
  }

}
