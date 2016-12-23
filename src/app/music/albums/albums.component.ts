import { Artist } from './../shared/models/artist.model';
import { Component, OnInit } from '@angular/core';
import { Album } from '../shared/models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albums: Array<Album>;

  ngOnInit() {
    this.albums = [
      {
        release: 'some release',
        title: 'some title',
        artists: [{ name: 'some artist' }],
        genres: ['some genre'],
        cover: 'http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-15.jpg',
        label: 'some label'
      },
      {
        release: 'some release',
        title: 'some title',
        artists: [{ name: 'some artist' }],
        genres: ['some genre'],
        label: 'some label',
        cover: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/602f4731226337.5646928c3633f.jpg'
      }
    ];
  }
}
