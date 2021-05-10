import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soft-alphabet',
  templateUrl: './soft-alphabet.component.html',
  styleUrls: ['./soft-alphabet.component.css']
})
export class SoftAlphabetComponent implements OnInit {
  softwares: any = [];
  soft_list: any = [];
  letter: string = '';
  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.letter = this.route.snapshot.params['id'].toLocaleUpperCase();
  }

  ngOnInit(): void {
    this.httpClient.get("/assets/json/softwares.json").subscribe(data => {
      this.softwares = data;
      this.soft_list = this.softwares.filter((el: { name: string; }) => el.name.charAt(0).toLocaleUpperCase() === this.letter);
    });
  }

}
