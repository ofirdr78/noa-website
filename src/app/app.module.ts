import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TestComponent } from './test/test.component';
import { LandingComponent } from './landing/landing.component';
import { routes } from 'app/routes';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ColorDirective } from './color.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskboardComponent,
    AboutMeComponent,
    TestComponent,
    LandingComponent,
    GalleryComponent,
    HomeComponent,
    ColorDirective,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
