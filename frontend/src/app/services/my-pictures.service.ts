import { Injectable } from '@angular/core';
import { MyPicture } from '../models/my-picture.model';

@Injectable({
  providedIn: 'root',
})
export class MyPicturesService {
  myPictures: MyPicture[] = [
    {
      id: 1,
      title: 'arthur',
      createdDate: new Date(),
      imageUrl:
        'https://cache.desktopnexus.com/thumbseg/1776/1776338-bigthumbnail.jpg',
      description: 'A vigilant warrior.',
      likes: 340,
      hates: 1,
    },
    {
      id: 2,
      title: 'diane',
      createdDate: new Date(),
      imageUrl:
        'https://64.media.tumblr.com/04f84cae98d7c2f1eb68af9ccf647259/2b24f477116c2941-f6/s1280x1920/f41cd26c6f4a0284be9a866ccbaa55c2ca1bad0f.jpg',
      description: 'A princess ready to fight.',
      likes: 199,
      hates: 1,
    },
    {
      id: 3,
      title: 'max',
      createdDate: new Date(),
      imageUrl:
        'https://konachan.com/jpeg/b4662afa85cdd0c606b7352eaa5d7603/Konachan.com%20-%20273907%20all_male%20blonde_hair%20close%20eugeo%20grass%20green_eyes%20male%20short_hair%20sketch%20sword_art_online%20sword_art_online_alicization%20yamada_koutarou.jpg',
      description: 'A boy who is resting.',
      likes: 53,
      hates: 2,
    },
    {
      id: 4,
      title: 'epona',
      createdDate: new Date(),
      imageUrl: 'https://images4.alphacoders.com/103/1037700.png',
      description: `Link's horse in a plain.`,
      location: 'plain',
      likes: 3450,
      hates: 0,
    },
    {
      id: 5,
      title: 'sky castle',
      createdDate: new Date(),
      imageUrl:
        'https://i.pinimg.com/originals/4e/c2/2a/4ec22afaf9d95167092a6bcb943d9f2d.jpg',
      description: 'A castle in the sky.',
      location: 'sky',
      likes: 37,
      hates: 3,
    },
    {
      id: 6,
      title: 'mononoke',
      createdDate: new Date(),
      imageUrl:
        'http://cinemalegyptis.org/app/uploads/sites/2/2022/02/princesse-Mononoke.jpg',
      description: 'People and animals in the mountains.',
      location: 'mountain',
      likes: 4320,
      hates: 0,
    },
    {
      id: 7,
      title: 'nature',
      createdDate: new Date(),
      imageUrl: 'https://p4.storage.canalblog.com/49/56/1109331/104272034.jpg',
      description: 'A pretty forest with a river.',
      location: 'forest',
      likes: 234,
      hates: 13,
    },
    {
      id: 8,
      title: 'boo',
      createdDate: new Date(),
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm78ejrcXu6m4THU1oLxwQK7SSFMcwnzBZfw&usqp=CAU',
      description: 'A bad ghost, be carreful when walking at night',
      likes: 0,
      hates: 199,
    },
    {
      id: 9,
      title: 'Lea',
      createdDate: new Date(),
      imageUrl:
        'https://www.lunchbox-productions.com/wp-content/uploads/2022/03/Hanako-Ohtani.png',
      description: 'She like eat a lot.',
      likes: 199,
      hates: 199,
    },
    {
      id: 10,
      title: 'fake sasuke',
      createdDate: new Date(),
      imageUrl:
        'https://i.kym-cdn.com/photos/images/newsfeed/001/661/469/526.jpg',
      description: 'A bad Sasuke who is thinking.',
      likes: 13,
      hates: 203,
    },
  ];

  getAllMyPictures(): MyPicture[] {
    return this.myPictures;
  }

  getMyPictureById(myPictureId: number): MyPicture {
    const myPicture = this.myPictures.find(
      (myPicture) => myPicture.id === myPictureId
    );
    if (!myPicture) {
      throw new Error('MyPicture not found!');
    } else {
      return myPicture;
    }
  }

  myPictureByIdLiked(
    myPictureId: number,
    pictureTypeLiked: 'oh snap !' | 'cancel'
  ): void {
    const myPicture = this.getMyPictureById(myPictureId);
    pictureTypeLiked === 'oh snap !' ? myPicture.likes++ : myPicture.likes--;
  }

  myPictureByIdHated(
    myPictureId: number,
    pictureTypeHated: 'boo !' | 'cancel'
  ): void {
    const myPicture = this.getMyPictureById(myPictureId);
    pictureTypeHated === 'boo !' ? myPicture.hates++ : myPicture.hates--;
  }
}
