import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPictureComponent } from './my-picture/my-picture.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyPictureListComponent } from './my-picture-list/my-picture-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleMyPictureComponent } from './single-my-picture/single-my-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPictureComponent,
    MyPictureListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleMyPictureComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
