import { Routes } from '@angular/router';
import { LandingComponent } from 'app/landing/landing.component';
import { GalleryComponent } from 'app/gallery/gallery.component';
import { ContentComponent } from 'app/content/content.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'content',
    component: ContentComponent,
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
