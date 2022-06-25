import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyPictureListComponent } from './my-picture-list/my-picture-list.component';
import { SingleMyPictureComponent } from './single-my-picture/single-my-picture.component';

const routes: Routes = [
  { path: 'mypictures/:id', component: SingleMyPictureComponent },
  { path: 'mypictures', component: MyPictureListComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
