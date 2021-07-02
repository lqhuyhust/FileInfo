import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../services/get-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  temp_data: any;
  categories: any = [];
  files: any = [];
  types: any = [];
  type_num: any;
  type: any;
  current: any;
  pre: any;
  next: any = {};
  num_id: any = {};

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
    this.getData.getTypesByFileId(this.num_id).subscribe(data => {
      this.temp_data = data;
      this.types = this.temp_data['data'];
      this.types = this.starClass(this.types);
      this.type_num = this.types.length;
      console.log(this.types);

    })
    this.getData.getAllFiles().subscribe(data => {
      this.temp_data = data;
      this.files = this.temp_data['data'];
      this.current = this.files[this.num_id - 1];
      var x = this.files.length;
      if (this.num_id == 1) {
        this.pre = this.files[x - 1];
        this.next = this.files[1];
      } else if (this.num_id == x) {
        this.pre = this.files[x - 2];
        this.next = this.files[0];
      } else {
        this.pre = this.files[this.num_id - 2];
        this.next = this.files[this.num_id];
      }
      console.log(this.files);

      console.log(this.pre);
      console.log(this.current);
      console.log(this.next);
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

}
