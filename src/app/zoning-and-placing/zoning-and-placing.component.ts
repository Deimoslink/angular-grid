import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoning-and-placing',
  templateUrl: './zoning-and-placing.component.html',
  styleUrls: ['./zoning-and-placing.component.css']
})
export class ZoningAndPlacingComponent implements OnInit {
  grid_template_areas: string;
  temp_cols = 'repeat(5, 1fr)';
  temp_rows = 'repeat(5, 1fr)';
  state = {
    'ga-item-1': {'grid-column': '', 'grid-row': '', 'grid-area': ''},
    'ga-item-2': {'grid-column': '', 'grid-row': '', 'grid-area': ''},
    'ga-item-3': {'grid-column': '', 'grid-row': '', 'grid-area': ''},
    'ga-item-4': {'grid-column': '', 'grid-row': '', 'grid-area': ''}
  };



  ngOnInit() {
  }

}
