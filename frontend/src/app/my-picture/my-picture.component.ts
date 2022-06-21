import { Component, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-my-picture',
  templateUrl: './my-picture.component.html',
  styleUrls: ['./my-picture.component.scss'],
})
export class MyPictureComponent implements OnInit {
  title!: string;
  description!: string;
  createdDated!: Date;
  likes!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'Arthus';
    this.description = 'My warrior !';
    this.createdDated = new Date();
    this.likes = 0;
    this.imageUrl =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEoaKxcxLUIT5mSIzGShB3edfg6cf3NFIjA&usqp=CAU';
  }

  onAddLike() {
    this.likes++;
  }
}
