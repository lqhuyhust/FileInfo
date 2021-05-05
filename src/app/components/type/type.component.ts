import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  categories: any = [];
  types: any = [];
  type: any;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.httpClient.get("/assets/json/types.json").subscribe(data => {
      this.types = data;
      this.type = this.types.find((el: { id: number; }) => el.id === +this.route.snapshot.params['id']);
      console.log(this.type);
    });
  }

}
