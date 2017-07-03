import { Routes } from '@angular/router';
import { LandingComponent } from 'app/landing/landing.component';
import { GalleryComponent } from 'app/gallery/gallery.component';
import { HomeComponent } from 'app/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'gallery',
        component: GalleryComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]
