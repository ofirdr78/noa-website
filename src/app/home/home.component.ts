import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    menubar: { name: string; path: string}[];

  constructor() {

    this.menubar = [
      { name: 'דף הבית', path: '/home' },
      { name: 'גלריה', path: '/home/gallery' },
      { name: 'מוצרים', path: '/home/products'},
      { name: 'מי אני', path: '/home/about' },
      { name: "צרו קשר", path: '/home/contact' }];

   }

  ngOnInit() {
  }

}
