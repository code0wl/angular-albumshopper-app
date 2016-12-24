import { Album } from './../../music/shared/models/album.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  albums: Array<Album>;
  constructor() { }

  ngOnInit() {
   this.albums = [
      {
        release: '1999',
        title: 'Xscape',
        artists: [{ name: 'Michael Jackson' }],
        genres: ['Pop'],
        cover: 'http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-15.jpg',
        label: 'Universal'
      },
      {
        release: '2010',
        title: 'Art vs Science',
        artists: [{ name: 'some artist' }],
        genres: ['experimental'],
        label: 'some label',
        cover: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/602f4731226337.5646928c3633f.jpg'
      }
    ];
  }
}
