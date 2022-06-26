import { Component, Input, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { SnapShot } from '../models/snap-shot.model';
import { SnapShotsService } from '../services/snap-shots.service';
import { Router } from '@angular/router';

enableProdMode();

@Component({
  selector: 'app-snap-shot',
  templateUrl: './snap-shot.component.html',
  styleUrls: ['./snap-shot.component.scss'],
})
export class SnapShotComponent implements OnInit {
  @Input() snapShot!: SnapShot;

  constructor(
    private snapShotsService: SnapShotsService,
    private router: Router
  ) {}

  ngOnInit() {}

  onViewSnapShot() {
    this.router.navigateByUrl(`snapshots/${this.snapShot.id}`);
  }
}
