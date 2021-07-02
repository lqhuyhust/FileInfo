import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../services/get-data.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  categories: any = [];
  temp_data: any;
  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  constructor(
    private getData: GetDataService
  ) { }

  ngOnInit(): void {
    this.getData.getAllCategories().subscribe(data => {
      this.temp_data = data;
      this.categories = this.temp_data['data'];
    })
  }

}
