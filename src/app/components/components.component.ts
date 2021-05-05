import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  types: any = [];
  searchText: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get("/assets/json/types.json").subscribe(data => {
      this.types = data;
    });
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
      })
    }
  }
}
