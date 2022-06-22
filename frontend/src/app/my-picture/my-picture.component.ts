import { Component, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

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
  hates!: number;
  imageUrl!: string;
  buttonLiked!: string;
  buttonHated!: string;
  //thumbsUp!: any;
  //thumbsDown!: any;

  /*All coms it's a test for dynamique thumps, appear if there are 1 like 
  And very important don't forget if you want use the coms ton change the type 'number' by 'any' for
  the likes and hates : */

  ngOnInit() {
    this.title = 'Arthus';
    this.description = 'My warrior !';
    this.createdDated = new Date();
    this.likes = 0;
    this.hates = 0;
    this.imageUrl =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEoaKxcxLUIT5mSIzGShB3edfg6cf3NFIjA&usqp=CAU';
    this.buttonLiked = 'Liked';
    this.buttonHated = 'Hated';
    //this.thumbsUp = '';
    //this.thumbsDown = '';
  }

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  onClickLiked() {
    if (this.buttonLiked === 'Liked') {
      this.likes++;
      this.buttonLiked = 'Unliked';
      this.buttonHated = 'Hated';
      this.hates = 0;
      //this.thumbsUp = '👍';
      //this.thumbsDown = '';
    } else {
      this.likes--;
      this.buttonLiked = 'Liked';
      this.buttonHated = 'Hated';
      //this.thumbsUp = '';
      //this.likes = '';
      //this.hates = '';
      //this.thumbsDown = '';
    }
  }

  onClickHated() {
    if (this.buttonHated === 'Hated') {
      this.hates++;
      this.buttonHated = 'Stop';
      this.buttonLiked = 'Liked';
      this.likes = 0;
      //this.thumbsDown = '👎';
      //this.thumbsUp = '';
    } else {
      this.hates--;
      this.buttonHated = 'Hated';
      this.buttonLiked = 'Liked';
      //this.thumbsDown = '';
      //this.hates = '';
      //this.likes = '';
      //this.thumbsUp = '';
    }
  }
}
