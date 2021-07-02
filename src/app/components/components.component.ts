import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  temp_data: any;
  types: any = [];
  softwares: any = [];
  searchText: string = '';

  constructor(
    private getData: GetDataService
  ) { }

  ngOnInit(): void {
    this.getData.getAllFiles().subscribe(data => {
      this.temp_data = data;
      this.types = this.temp_data['data'];
      console.log(this.types);
    });
    this.getData.getAllSoftwares().subscribe(data => {
      this.temp_data = data;
      this.softwares = this.temp_data['data'];
      console.log(this.softwares);

    })
  }

  Search() {
    var u = document.getElementById('filter-result');
    console.log(u);

    if (u != undefined) {
      u.style.display = 'block';
    }
    if (this.searchText == "") {
      this.ngOnInit();
    } else {
      console.log('change');

      this.types = this.types.filter((res: { name: string; }) => {
        return res.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
      });
      this.softwares = this.softwares.filter((res: { name: string }) => {
        return res.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
      })
    }
  }
}
