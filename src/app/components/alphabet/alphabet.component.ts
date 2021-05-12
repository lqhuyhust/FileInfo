import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {
  extensions: any = [];
  ex_list: any = [];
  letter: string = '';
  sortName: boolean = true;

  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.letter = this.route.snapshot.params['id'].toLocaleUpperCase() == 1 ? '#' : this.route.snapshot.params['id'].toLocaleUpperCase();
  }


  ngOnInit(): void {
    this.httpClient.get("/assets/json/types.json").subscribe(data => {
      this.extensions = data;
      this.ex_list = this.extensions.filter((el: { name: string; }) => el.name.charAt(1).toLocaleUpperCase() === this.letter);
    });
  }

  sort(field: string) {
    if (this.sortName) {
      this.ex_list = _.orderBy(this.ex_list, [field], ['asc']);
    } else {
      this.ex_list = _.orderBy(this.ex_list, [field], ['desc']);
    }

    this.sortName = !this.sortName;
  }
}
