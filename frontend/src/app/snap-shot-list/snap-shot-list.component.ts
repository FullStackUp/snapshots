import { Component, OnInit } from '@angular/core';
import { SnapShot } from '../models/snap-shot.model';
import { SnapShotsService } from '../services/snap-shots.service';

@Component({
  selector: 'app-snap-shot-list',
  templateUrl: './snap-shot-list.component.html',
  styleUrls: ['./snap-shot-list.component.scss'],
})
export class SnapShotListComponent implements OnInit {
  snapShots!: SnapShot[];

  constructor(private snapShotsService: SnapShotsService) {}

  ngOnInit(): void {
    this.snapShots = this.snapShotsService.getAllSnapShots();
  }
}
