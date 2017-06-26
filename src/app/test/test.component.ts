import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
  
})
export class TestComponent implements OnInit {
 
  photoList = [
               {path:"/assets/makeup1.jpg", title: "Makeup", pos: 1},  
               {path:"/assets/makeup2.jpg", title: "Brushes ", pos: 2}, 
               {path:"/assets/makeup3.jpg", title: "Face Makeup", pos: 3},
               {path:"/assets/makeup4.jpg", title: "Makeup box", pos: 4},
               {path:"/assets/makeup5.jpg", title: "Makeup box 2", pos: 5}];

  currentPos = 1;

  currentPhoto=this.photoList[0].path;

  currentTitle=this.photoList[0].title;
 
  currentClass="thumbnail";

  constructor() {
    
  }

  ngOnInit() {
    
  }
  

  PhotoClicked(photo) {
    this.currentPhoto = photo.path;
    this.currentPos = photo.pos;
    this.currentTitle = photo.title;
    
  }    

  LeftArrowClicked(event) {
    if (this.currentPos >= 1) {
      this.currentPos -= 1;
      for (let photo of this.photoList) {
        if (photo.pos == this.currentPos) {
          this.currentPhoto = photo.path;
           this.currentTitle = photo.title;
        }
      }
    }

      if (this.currentPos == 0) {
      this.currentPos = 5;
      for (let photo of this.photoList) {
        if (photo.pos == this.currentPos) {
          this.currentPhoto = photo.path;
           this.currentTitle = photo.title;
       }  
      } 
  } 
  }

  RightArrowClicked(event) {
    if (this.currentPos <= 5) {
      this.currentPos += 1;
      for (let photo of this.photoList) {
        if (photo.pos == this.currentPos) {
          this.currentPhoto = photo.path;
           this.currentTitle = photo.title;
        }
      }
    }
    if (this.currentPos == 6) {
      this.currentPos = 1;
      for (let photo of this.photoList) {
        if (photo.pos == this.currentPos) {
          this.currentPhoto = photo.path;
           this.currentTitle = photo.title;
       }  
      }
    } 
  }

}
