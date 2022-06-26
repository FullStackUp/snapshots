import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SnapShotListComponent } from './snap-shot-list/snap-shot-list.component';
import { SingleSnapShotComponent } from './single-snap-shot/single-snap-shot.component';

const routes: Routes = [
  { path: 'snapshots/:id', component: SingleSnapShotComponent },
  { path: 'snapshots', component: SnapShotListComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
