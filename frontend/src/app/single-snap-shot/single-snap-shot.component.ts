import { Component, OnInit } from '@angular/core';
import { SnapShot } from '../models/snap-shot.model';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { SnapShotsService } from '../services/snap-shots.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-snap-shot',
  templateUrl: './single-snap-shot.component.html',
  styleUrls: ['./single-snap-shot.component.scss'],
})
export class SingleSnapShotComponent implements OnInit {
  snapShot!: SnapShot;
  buttonLiked!: string;
  buttonHated!: string;

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor(
    private snapShotsService: SnapShotsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonLiked = 'oh snap !';
    this.buttonHated = 'boo !';
    //the + transform the character string number to number
    const snapShotId = +this.route.snapshot.params['id'];
    this.snapShot = this.snapShotsService.getSnapShotById(snapShotId);
  }

  onClickLiked() {
    if (this.buttonLiked === 'oh snap !' && this.buttonHated === 'boo !') {
      this.snapShotsService.snapShotByIdLiked(this.snapShot.id, 'oh snap !');
      this.buttonLiked = 'cancel';
    } else if (this.buttonLiked === 'cancel' && this.buttonHated === 'boo !') {
      this.snapShotsService.snapShotByIdLiked(this.snapShot.id, 'cancel');
      this.buttonLiked = 'oh snap !';
    }
  }

  onClickHated() {
    if (this.buttonLiked === 'oh snap !' && this.buttonHated === 'boo !') {
      this.snapShotsService.snapShotByIdHated(this.snapShot.id, 'boo !');
      this.buttonHated = 'cancel';
    } else if (
      this.buttonLiked === 'oh snap !' &&
      this.buttonHated === 'cancel'
    ) {
      this.snapShotsService.snapShotByIdHated(this.snapShot.id, 'cancel');
      this.buttonHated = 'boo !';
    }
  }
}
