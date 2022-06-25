import { Component, Input, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { MyPicture } from '../models/my-picture.model';
import { MyPicturesService } from '../services/my-pictures.service';
import { Router } from '@angular/router';

enableProdMode();

@Component({
  selector: 'app-my-picture',
  templateUrl: './my-picture.component.html',
  styleUrls: ['./my-picture.component.scss'],
})
export class MyPictureComponent implements OnInit {
  @Input() myPicture!: MyPicture;

  constructor(
    private myPicturesService: MyPicturesService,
    private router: Router
  ) {}

  ngOnInit() {}

  onViewMyPicture() {
    this.router.navigateByUrl(`mypictures/${this.myPicture.id}`);
  }
}
