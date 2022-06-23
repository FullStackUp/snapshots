import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPictureComponent } from './my-picture/my-picture.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyPictureListComponent } from './my-picture-list/my-picture-list.component';

@NgModule({
  declarations: [AppComponent, MyPictureComponent, MyPictureListComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
