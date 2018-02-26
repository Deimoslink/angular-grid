import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  images;

  randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }

  ngOnInit() {
    this.images = Array.from({ length: 50 }, () => [this.randomNumber(4), this.randomNumber(4), this.randomNumber(15)])
      .concat([[1, 1, this.randomNumber(15)]])
    ;
  }

}
