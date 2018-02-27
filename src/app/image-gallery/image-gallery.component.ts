import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  images;
  dense_flow = false;
  grid_gap = 20;
  image_size = 100;

  randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }

  showImages() {
    this.images = Array.from({ length: 50 }, () => [this.randomNumber(4), this.randomNumber(4), this.randomNumber(15)])
      .concat([[1, 1, this.randomNumber(15)]]);
  }

  ngOnInit() {
    this.showImages();
  }


}
