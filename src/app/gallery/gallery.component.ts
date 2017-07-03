import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photoList1: { path: string; title: string;}[];
  photoList2: { path: string; title: string;}[];
  photoList3: { path: string; title: string;}[];
  photoList4: { path: string; title: string;}[];
  photoList5: { path: string; title: string;}[];

  bigphoto:  { path: string; title: string;}
  picked: boolean;

  constructor() {
  this.photoList1 = [
      { path: '/assets/photos/photo1.jpg', title: 'Makeup' },
      { path: '/assets/photos/photo2.jpg', title: 'Brushes' },
      { path: '/assets/photos/photo3.jpg', title: 'Face Makeup' },
      { path: '/assets/photos/photo4.jpg', title: 'Makeup box' },
      { path: '/assets/photos/photo5.jpg', title: 'Brushes' }];

  this.photoList2 = [
      { path: '/assets/photos/photo6.jpg', title: 'Face Makeup' },
      { path: '/assets/photos/photo7.jpg', title: 'Makeup box' },
      { path: '/assets/photos/photo8.jpg', title: 'Face Makeup' },
      { path: '/assets/photos/photo9.jpg', title: 'Makeup box' },
      { path: '/assets/photos/photo10.jpg', title: 'Makeup box 2' }];
 
   this.photoList3 = [
      { path: '/assets/photos/photo11.jpg', title: 'Makeup' },
      { path: '/assets/photos/photo12.jpg', title: 'Brushes' },
      { path: '/assets/photos/photo13.jpg', title: 'Face Makeup' },
      { path: '/assets/photos/photo14.jpg', title: 'Makeup box' }];
  

  this.photoList4 = [
      { path: '/assets/photos/photo15.jpg', title: 'Face Makeup' },
      { path: '/assets/photos/photo16.jpg', title: 'Makeup box' },
      { path: '/assets/photos/photo17.jpg', title: 'Face Makeup' },
      { path: '/assets/photos/photo18.jpg', title: 'Makeup box' },
      { path: '/assets/photos/photo19.jpg', title: 'Makeup box 2' }];

   this.photoList5 = [
      { path: '/assets/photos/photo20.jpg', title: 'Makeup' },
      { path: '/assets/photos/photo21.jpg', title: 'Makeup' },
      { path: '/assets/photos/photo22.jpg', title: 'Brushes' },
      { path: '/assets/photos/photo23.jpg', title: 'Face Makeup' },
      { path: '/assets/photos/photo24.jpg', title: 'Makeup box' },
      { path: '/assets/photos/photo25.jpg', title: 'Brushes' }];

  this.picked = false;
  this.bigphoto = { path: '', title: ''};

   }

  ngOnInit() {
  }
  
  photoClicked(photo) {
   this.bigphoto = photo;
   this.picked = true;
  }

  bigPhotoClicked() {
    this.picked = false;
  }
}
