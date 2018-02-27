import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-constructor',
  templateUrl: './grid-constructor.component.html',
  styleUrls: ['./grid-constructor.component.css']
})
export class GridConstructorComponent implements OnInit {
  num_of_items = 20;
  grid_gap = 20;
  flow_direction = 'row';
  temp_cols: string;
  temp_rows: string;
  auto_cols: string;
  auto_rows: string;
  auto: false;
  items: Array<any>;

  setArrayOfItems(num: number) {
    this.items = Array.from({ length: num }, (index) => index);
  }

  ngOnInit() {
    this.setArrayOfItems(this.num_of_items);
    console.log(this.items);
  }

}
