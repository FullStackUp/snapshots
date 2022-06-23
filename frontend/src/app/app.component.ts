import { Component, OnInit } from '@angular/core';
import { MyPicture } from './models/my-picture.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myPictures!: MyPicture[];

  ngOnInit() {
    this.myPictures = [
      {
        title: 'Arthus',
        createdDate: new Date(),
        imageUrl:
          'https://cache.desktopnexus.com/thumbseg/1776/1776338-bigthumbnail.jpg',
        description: 'a warrior !',
        likes: 0,
        hates: 0,
      },
      {
        title: 'Dianus',
        createdDate: new Date(),
        imageUrl:
          'https://64.media.tumblr.com/04f84cae98d7c2f1eb68af9ccf647259/2b24f477116c2941-f6/s1280x1920/f41cd26c6f4a0284be9a866ccbaa55c2ca1bad0f.jpg',
        description: 'a princess !',
        likes: 0,
        hates: 0,
      },
      {
        title: 'Tidius',
        createdDate: new Date(),
        imageUrl:
          'https://konachan.com/jpeg/b4662afa85cdd0c606b7352eaa5d7603/Konachan.com%20-%20273907%20all_male%20blonde_hair%20close%20eugeo%20grass%20green_eyes%20male%20short_hair%20sketch%20sword_art_online%20sword_art_online_alicization%20yamada_koutarou.jpg',
        description: 'a young  !',
        likes: 0,
        hates: 0,
      },
      {
        title: 'Epona',
        createdDate: new Date(),
        imageUrl: 'https://images4.alphacoders.com/103/1037700.png',
        description: 'a horse !',
        location: 'Mountain',
        likes: 0,
        hates: 0,
      },
      {
        title: 'Heaven Castle',
        createdDate: new Date(),
        imageUrl:
          'https://i.pinimg.com/originals/4e/c2/2a/4ec22afaf9d95167092a6bcb943d9f2d.jpg',
        description: 'a kingdom !',
        location: 'Heaven',
        likes: 0,
        hates: 0,
      },
      {
        title: 'Mononoke',
        createdDate: new Date(),
        imageUrl:
          'http://cinemalegyptis.org/app/uploads/sites/2/2022/02/princesse-Mononoke.jpg',
        description: 'a Wolf !',
        location: 'The plain',
        likes: 0,
        hates: 0,
      },
      {
        title: 'Nature',
        createdDate: new Date(),
        imageUrl:
          'https://p4.storage.canalblog.com/49/56/1109331/104272034.jpg',
        description: 'a Wolf !',
        likes: 0,
        hates: 0,
      },
    ];
  }
}
