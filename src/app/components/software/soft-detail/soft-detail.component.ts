import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soft-detail',
  templateUrl: './soft-detail.component.html',
  styleUrls: ['./soft-detail.component.css']
})
export class SoftDetailComponent implements OnInit {

  categories: any = [];
  softwares: any = [];
  soft: any;
  file_sup: any = [];
  additional_file: any = [];
  main_feature: any = [];
  pre: any = {};
  next: any = {};
  num_id: any = {};
  type: any;

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
    this.httpClient.get("/assets/json/softwares.json").subscribe(data => {
      this.softwares = data;
      this.num_id = +this.route.snapshot.params['id'];
      this.soft = this.softwares.find((el: { id: number; }) => el.id === this.num_id);
      this.additional_file = this.soft.additional_file;
      this.main_feature = this.soft.main_feature;
      this.type = typeof this.additional_file;

      this.file_sup = this.soft.file_sup;

      if (this.num_id == this.softwares[0].id) {
        this.pre = this.softwares[this.softwares.length - 1];
      } else {
        this.pre = this.softwares.find((el: { id: number; }) => el.id === this.num_id - 1);
      }
      if (this.num_id == this.softwares[this.softwares.length - 1].id) {
        this.next = this.softwares[0];
      } else {
        this.next = this.softwares.find((el: { id: number; }) => el.id === this.num_id + 1);
      }
    });
  }

}
