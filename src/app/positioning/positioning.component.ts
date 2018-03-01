import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positioning',
  templateUrl: './positioning.component.html',
  styleUrls: ['./positioning.component.css']
})
export class PositioningComponent implements OnInit {
  items = ['p-item-1', 'p-item-2', 'p-item-3', 'p-item-4', 'LOOK AT ME!!!', 'p-item-6', 'p-item-7', 'p-item-8', 'p-item-9', 'p-item-10'];
  containerDefault = {
    'height': '500px',
    'display': 'grid',
    'grid-gap': '20px',
    'grid-template-columns': 'repeat(5, 130px)',
    'border': '4px solid rgba(255, 255, 255, 0.7)'
  };
  containerStyle = {
    'height': '500px',
    'display': 'grid',
    'grid-gap': '20px',
    'grid-template-columns': 'repeat(5, 130px)',
    'border': '4px solid rgba(255, 255, 255, 0.7)'
  };
  itemDefault = {'display': 'grid'};
  itemStyle = {'display': 'grid'};
  container_prefix: string;
  container_modifier: string;
  container_val: string;
  item_prefix: string;
  item_modifier: string;
  item_val: string;
  constructor() { }

  changeContainerStyle() {
    if (this.container_prefix && this.container_modifier && this.container_val) {
      this.containerStyle = Object.assign({}, this.containerDefault);
      const key = this.container_prefix + this.container_modifier;
      this.containerStyle[key] = this.container_val;
    }
  }

  changeItemStyle() {
    if (this.item_prefix && this.item_modifier && this.item_val) {
      this.itemStyle = Object.assign({}, this.itemDefault);
      const key = this.item_prefix + this.item_modifier;
      this.itemStyle[key] = this.item_val;
    }
  }

  saveContainerRules() {
    this.containerDefault = Object.assign({}, this.containerStyle);
  }

  saveItemRules() {
    this.itemDefault = Object.assign({}, this.itemStyle);
  }

  ngOnInit() {
  }

}
