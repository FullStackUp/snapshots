import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SnapShotComponent } from './snap-shot/snap-shot.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SnapShotListComponent } from './snap-shot-list/snap-shot-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleSnapShotComponent } from './single-snap-shot/single-snap-shot.component';

@NgModule({
  declarations: [
    AppComponent,
    SnapShotComponent,
    SnapShotListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleSnapShotComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
