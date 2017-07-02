import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
   audio: any;
   music_play: boolean;
   mp3_button: string;
   volumebar: { level: number;}[];
   value: number;

  constructor()
   { 
    this.volumebar = [
      { level: 1 },
      { level: 2  },
      { level: 3  },
      { level: 4  },
      { level: 5 }];
    this.value=0;

    this.mp3_button = "/assets/pause 3.jpg";
    this.music_play = true;
    this.audio = new Audio();
    this.audio.src = "/assets/music.mp3";
    this.audio.load();
    this.audio.play();
    this.audio.loop = true;
    this.audio.controls = true;

   }
  ngOnInit() {
  }

  clicked() {
    if (this.music_play) {
      this.audio.pause();
       this.mp3_button = "/assets/play 3.jpg";
      this.music_play = false;
      return;
    }
 
    this.audio.play();
    this.music_play = true;
    this.mp3_button = "/assets/pause 3.jpg";
  }

    showValue(num) {
      this.value = num;
    } 



}





