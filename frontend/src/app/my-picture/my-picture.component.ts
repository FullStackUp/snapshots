import { Component, Input, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { MyPicture } from '../models/my-picture.model';

enableProdMode();

@Component({
  selector: 'app-my-picture',
  templateUrl: './my-picture.component.html',
  styleUrls: ['./my-picture.component.scss'],
})
export class MyPictureComponent implements OnInit {
  @Input() myPicture!: MyPicture;
  buttonLiked!: string;
  buttonHated!: string;

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  ngOnInit() {
    this.buttonLiked = 'Liked';
    this.buttonHated = 'Hated';
  }

  onClickLiked() {
    if (this.buttonLiked === 'Liked') {
      this.myPicture.likes++;
      this.buttonLiked = 'Unliked';
      this.buttonHated = 'Hated';
      this.myPicture.hates = 0;
    } else {
      this.myPicture.likes--;
      this.buttonLiked = 'Liked';
      this.buttonHated = 'Hated';
    }
  }

  onClickHated() {
    if (this.buttonHated === 'Hated') {
      this.myPicture.hates++;
      this.buttonHated = 'Stop';
      this.buttonLiked = 'Liked';
      this.myPicture.likes = 0;
    } else {
      this.myPicture.hates--;
      this.buttonHated = 'Hated';
      this.buttonLiked = 'Liked';
    }
  }
}
