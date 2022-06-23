import { Component, Input, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { MyPicture } from '../models/my-picture.model';
import { MyPicturesService } from '../services/my-pictures.service';

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

  constructor(private myPicturesService: MyPicturesService) {}

  ngOnInit() {
    this.buttonLiked = 'oh snap !';
    this.buttonHated = 'boo !';
  }

  onClickLiked() {
    if (this.buttonLiked === 'oh snap !' && this.buttonHated === 'boo !') {
      this.myPicturesService.myPictureByIdLiked(this.myPicture.id, 'oh snap !');
      this.buttonLiked = 'cancel';
    } else if (this.buttonLiked === 'cancel' && this.buttonHated === 'boo !') {
      this.myPicturesService.myPictureByIdLiked(this.myPicture.id, 'cancel');
      this.buttonLiked = 'oh snap !';
    }
  }

  onClickHated() {
    if (this.buttonLiked === 'oh snap !' && this.buttonHated === 'boo !') {
      this.myPicturesService.myPictureByIdHated(this.myPicture.id, 'boo !');
      this.buttonHated = 'cancel';
    } else if (
      this.buttonLiked === 'oh snap !' &&
      this.buttonHated === 'cancel'
    ) {
      this.myPicturesService.myPictureByIdHated(this.myPicture.id, 'cancel');
      this.buttonHated = 'boo !';
    }
  }
}
