import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soft-list',
  templateUrl: './soft-list.component.html',
  styleUrls: ['./soft-list.component.css']
})
export class SoftListComponent implements OnInit {
  softwares: any = [];

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
    });
  }

}
