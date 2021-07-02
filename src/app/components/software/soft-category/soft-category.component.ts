import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetDataService } from './../../../services/get-data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-soft-category',
  templateUrl: './soft-category.component.html',
  styleUrls: ['./soft-category.component.css']
})
export class SoftCategoryComponent implements OnInit {
  temp_data: any;
  category: any;
  catId: any;
  categories: any = [];
  softwares: any = [];
  soft_list: any = [];
  sortName: any;

  constructor(
    private getData: GetDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.catId = +this.route.snapshot.params['id'];
  }


  ngOnInit(): void {
    this.getData.getAllSoftCategories().subscribe(data => {
      this.temp_data = data;
      this.categories = this.temp_data['data'];
      this.category = this.categories.filter((el: { id: number }) => el.id === this.catId)[0];
    })

    this.getData.getSoftwaresByCategoryId(this.catId).subscribe(data => {
      this.temp_data = data;
      this.softwares = this.temp_data['data'];
      this.soft_list = this.starClass(this.softwares);
    })
  }

  starClass(type_list: any) {
    type_list.forEach((el: any) => {
      var num = el.star / 0.5;
      num = Math.round(num)
      el['star_class'] = num > 9 ? 'five' : (num > 8 ? 'four-half' : (num > 7 ? 'four' : (num > 6 ? 'three-half' : (num > 5 ? 'three' : (num > 4 ? 'two-half' : (num > 3 ? 'two' : (num > 2 ? 'one-half' : (num > 1 ? 'one' : 'half'))))))));
    });
    return type_list;
  }

  sort(field: string) {
    if (this.sortName) {
      this.soft_list = _.orderBy(this.soft_list, [field], ['asc']);
    } else {
      this.soft_list = _.orderBy(this.soft_list, [field], ['desc']);
    }

    this.sortName = !this.sortName;
  }

}
