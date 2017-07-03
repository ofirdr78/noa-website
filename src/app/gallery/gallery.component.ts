import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photoList: { path: string; title: string; class: string;}[];
  
   
  constructor() {
  this.photoList = [
      { path: '/assets/photo1.jpg', title: 'Makeup', class: 'stand' },
      { path: '/assets/photo2.jpg', title: 'Brushes', class: 'box' },
      { path: '/assets/photo3.jpg', title: 'Face Makeup', class: 'box' },
      { path: '/assets/photo4.jpg', title: 'Makeup box' , class: 'lay'},
      { path: '/assets/photo5.jpg', title: 'Brushes', class: 'stand' },
      { path: '/assets/photo6.jpg', title: 'Face Makeup', class: 'box' },
      { path: '/assets/photo7.jpg', title: 'Makeup box', class: 'box' },
      { path: '/assets/photo8.jpg', title: 'Face Makeup', class: 'stand'},
      { path: '/assets/photo9.jpg', title: 'Makeup box', class: 'box'},
      { path: '/assets/photo10.jpg', title: 'Makeup box 2', class: 'lay' }];


   }

  ngOnInit() {
  }

}
