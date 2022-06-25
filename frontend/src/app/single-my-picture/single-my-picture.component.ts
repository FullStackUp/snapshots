import { Component, OnInit } from '@angular/core';
import { MyPicture } from '../models/my-picture.model';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { MyPicturesService } from '../services/my-pictures.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-my-picture',
  templateUrl: './single-my-picture.component.html',
  styleUrls: ['./single-my-picture.component.scss'],
})
export class SingleMyPictureComponent implements OnInit {
  myPicture!: MyPicture;
  buttonLiked!: string;
  buttonHated!: string;

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor(
    private myPicturesService: MyPicturesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonLiked = 'oh snap !';
    this.buttonHated = 'boo !';
    //the + transform the character string number to number
    const myPictureId = +this.route.snapshot.params['id'];
    this.myPicture = this.myPicturesService.getMyPictureById(myPictureId);
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
