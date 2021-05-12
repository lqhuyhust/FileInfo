import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';

@Component({
  selector: 'app-soft-browse',
  templateUrl: './soft-browse.component.html',
  styleUrls: ['./soft-browse.component.css']
})
export class SoftBrowseComponent implements OnInit {
  categories: any = [];
  companies: any = [];
  sortField: boolean = true;
  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get("/assets/json/soft-categories.json").subscribe(data => {
      console.log(data);
      this.categories = data;
    })
    this.httpClient.get("/assets/json/companies.json").subscribe(data => {
      console.log(data);
      this.companies = data;
    })
  }

  sort(field: string) {
    if (this.sortField) {
      this.companies = _.orderBy(this.companies, [field], ['asc']);
    } else {
      this.companies = _.orderBy(this.companies, [field], ['desc']);
    }

    this.sortField = !this.sortField;
  }
}
