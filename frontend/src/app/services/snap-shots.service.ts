import { Injectable } from '@angular/core';
import { SnapShot } from '../models/snap-shot.model';

@Injectable({
  providedIn: 'root',
})
export class SnapShotsService {
  snapShots: SnapShot[] = [
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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMy5Pralfo2YJgAFS1zR1BV4ZZLiqeX_H0EQ&usqp=CAU',
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

  getAllSnapShots(): SnapShot[] {
    return this.snapShots;
  }

  getSnapShotById(snapShotId: number): SnapShot {
    const snapShot = this.snapShots.find(
      (snapShot) => snapShot.id === snapShotId
    );
    if (!snapShot) {
      throw new Error('SnapShot not found!');
    } else {
      return snapShot;
    }
  }

  snapShotByIdLiked(
    snapShotId: number,
    snapShotTypeLiked: 'oh snap !' | 'cancel'
  ): void {
    const snapShot = this.getSnapShotById(snapShotId);
    snapShotTypeLiked === 'oh snap !' ? snapShot.likes++ : snapShot.likes--;
  }

  snapShotByIdHated(
    snapShotId: number,
    snapShotTypeHated: 'boo !' | 'cancel'
  ): void {
    const snapShot = this.getSnapShotById(snapShotId);
    snapShotTypeHated === 'boo !' ? snapShot.hates++ : snapShot.hates--;
  }
}
