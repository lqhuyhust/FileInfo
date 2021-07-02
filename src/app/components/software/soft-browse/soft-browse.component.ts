import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { GetDataService } from './../../../services/get-data.service';

@Component({
  selector: 'app-soft-browse',
  templateUrl: './soft-browse.component.html',
  styleUrls: ['./soft-browse.component.css']
})
export class SoftBrowseComponent implements OnInit {
  temp_data: any;
  categories: any = [];
  companies: any = [];
  sortField: boolean = true;
  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  constructor(
    private getData: GetDataService
  ) { }

  ngOnInit(): void {
    this.getData.getAllCompanies().subscribe(data => {
      this.temp_data = data;
      this.companies = this.temp_data['data'];
    })
    this.getData.getAllSoftCategories().subscribe(data => {
      this.temp_data = data;
      this.categories = this.temp_data['data'];
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
