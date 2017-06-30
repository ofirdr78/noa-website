import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {
  menubar: { name: string;}[];
  flag = false;
  
  constructor()
   { 
     this.menubar = [
      { name: 'דף הבית' },
      { name: 'גלריה' },
      { name: 'מוצרים' },
      { name: 'מי אני' },
      { name: "צרו קשר" }];

   }
  ngOnInit() {
  }
}
