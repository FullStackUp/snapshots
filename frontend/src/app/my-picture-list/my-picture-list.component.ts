import { Component, OnInit } from '@angular/core';
import { MyPicture } from '../models/my-picture.model';
import { MyPicturesService } from '../services/my-pictures.service';

@Component({
  selector: 'app-my-picture-list',
  templateUrl: './my-picture-list.component.html',
  styleUrls: ['./my-picture-list.component.scss'],
})
export class MyPictureListComponent implements OnInit {
  myPictures!: MyPicture[];

  constructor(private myPicturesService: MyPicturesService) {}

  ngOnInit(): void {
    this.myPictures = this.myPicturesService.getAllMyPictures();
  }
}
