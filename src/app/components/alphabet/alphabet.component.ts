import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { GetDataService } from './../../services/get-data.service';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {
  temp_data: any;
  extensions: any = [];
  ex_list: any = [];
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
    this.getData.getTypesByAlpha(this.alpha_id).subscribe(data => {
      this.temp_data = data;
      this.extensions = this.temp_data['data'];
      this.ex_list = this.starClass(this.extensions);
      console.log(this.alpha_id);

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
      this.ex_list = _.orderBy(this.ex_list, [field], ['asc']);
    } else {
      this.ex_list = _.orderBy(this.ex_list, [field], ['desc']);
    }

    this.sortName = !this.sortName;
  }
}
