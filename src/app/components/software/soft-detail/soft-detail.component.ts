import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../../services/get-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-soft-detail',
  templateUrl: './soft-detail.component.html',
  styleUrls: ['./soft-detail.component.css']
})
export class SoftDetailComponent implements OnInit {
  temp_data: any;
  categories: any = [];
  softwares: any = [];
  software: any;
  file_sup: any = [];
  additional_file: any = [];
  main_feature: any = [];
  current: any;
  pre: any;
  next: any = {};
  num_id: any = {};
  overview: any = [];
  main_features: any = [];
  sortName: boolean = true;

  constructor(
    private getData: GetDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.num_id = +this.route.snapshot.params['id'];
  }


  ngOnInit(): void {
    this.getData.getSoftwareById(this.num_id).subscribe(data => {
      this.temp_data = data;
      this.software = this.temp_data['data'][0];
      this.overview = this.software['overview'].split("\\n");
      this.main_features = this.software['main_feature'].split("&&");
      this.software = this.starClass(this.software);
      console.log(this.software);

    });
    this.getData.getAllSoftwares().subscribe(data => {
      this.temp_data = data;
      this.softwares = this.temp_data['data'];
      this.current = this.softwares[this.num_id - 1];
      var x = this.softwares.length;
      if (this.num_id == 1) {
        this.pre = this.softwares[x - 1];
        this.next = this.softwares[1];
      } else if (this.num_id == x) {
        this.pre = this.softwares[x - 2];
        this.next = this.softwares[0];
      } else {
        this.pre = this.softwares[this.num_id - 2];
        this.next = this.softwares[this.num_id];
      }
    })
    this.getData.getTypesBySoftware(this.num_id).subscribe(data => {
      this.temp_data = data;
      this.file_sup = this.temp_data['data'];
    })
  }

  starClass(software: any) {
    var num = software.star / 0.5;
    num = Math.round(num)
    software['star_class'] = num > 9 ? 'five' : (num > 8 ? 'four-half' : (num > 7 ? 'four' : (num > 6 ? 'three-half' : (num > 5 ? 'three' : (num > 4 ? 'two-half' : (num > 3 ? 'two' : (num > 2 ? 'one-half' : (num > 1 ? 'one' : 'half'))))))));

    return software;
  }

  sort(field: string) {
    if (this.sortName) {
      this.file_sup = _.orderBy(this.file_sup, [field], ['asc']);
    } else {
      this.file_sup = _.orderBy(this.file_sup, [field], ['desc']);
    }

    this.sortName = !this.sortName;
  }

}
