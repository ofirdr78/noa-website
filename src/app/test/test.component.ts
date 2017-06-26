import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']

})
export class TestComponent implements OnInit {

  photoList: { path: string; title: string; }[];
  currentPhoto: { path: string; title: string; };

  // currentPos = 1;

  // currentPhoto = this.photoList[0].path;

  // currentTitle = this.photoList[0].title;

  // currentClass = 'thumbnail';

  constructor() {
    this.photoList = [
      { path: '/assets/makeup1.jpg', title: 'Makeup' },
      { path: '/assets/makeup2.jpg', title: 'Brushes' },
      { path: '/assets/makeup3.jpg', title: 'Face Makeup' },
      { path: '/assets/makeup4.jpg', title: 'Makeup box' },
      { path: '/assets/makeup5.jpg', title: 'Makeup box 2' }];

    this.currentPhoto = this.photoList[0];
  }

  ngOnInit() {

  }


  PhotoClicked(photo) {
    this.currentPhoto = photo.path;
    // this.currentPos = photo.pos;
    // this.currentTitle = photo.title;

  }

  leftArrowClicked() {
    const indexOfCurrentPhoto = this.photoList.indexOf(this.currentPhoto);
    if (indexOfCurrentPhoto >= 1) {
      this.currentPhoto = this.photoList[indexOfCurrentPhoto - 1];
      return;
    }

    this.currentPhoto = this.photoList[this.photoList.length - 1];
  }

  rightArrowClicked(event) {
    const indexOfCurrentPhoto = this.photoList.indexOf(this.currentPhoto);
    if (indexOfCurrentPhoto < this.photoList.length - 1) {
      this.currentPhoto = this.photoList[indexOfCurrentPhoto + 1];
      return;
    }

    this.currentPhoto = this.photoList[0];
  }

}
