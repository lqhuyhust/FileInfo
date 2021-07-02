import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../../services/get-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-soft-alphabet',
  templateUrl: './soft-alphabet.component.html',
  styleUrls: ['./soft-alphabet.component.css']
})
export class SoftAlphabetComponent implements OnInit {
  temp_data: any;
  softwares: any = [];
  soft_list: any = [];
  letter: string = '';
  sortName: boolean = true;
  alpha_id: any;
  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  constructor(
    private getData: GetDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.letter = this.route.snapshot.params['id'].toLocaleUpperCase() == 1 ? '#' : this.route.snapshot.params['id'].toLocaleUpperCase();
    this.alpha_id = this.letter == '#' ? 1 : this.letter;
  }

  ngOnInit(): void {
    this.getData.getSoftwaresByAlphabet(this.alpha_id).subscribe(data => {
      this.temp_data = data;
      this.softwares = this.temp_data['data'];
      this.soft_list = this.starClass(this.softwares);
      console.log(data);
      console.log(this.letter);

    })
  }

  starClass(soft_list: any) {
    soft_list.forEach((el: any) => {
      var num = el.star / 0.5;
      num = Math.round(num)
      el['star_class'] = num > 9 ? 'five' : (num > 8 ? 'four-half' : (num > 7 ? 'four' : (num > 6 ? 'three-half' : (num > 5 ? 'three' : (num > 4 ? 'two-half' : (num > 3 ? 'two' : (num > 2 ? 'one-half' : (num > 1 ? 'one' : 'half'))))))));
    });
    return soft_list;
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
