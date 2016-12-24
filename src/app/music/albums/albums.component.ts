import { Artist } from './../shared/models/artist.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Album } from '../shared/models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albums: Array<Album>;
  @Output() selectAlbum: EventEmitter<Album> = new EventEmitter();

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
  onSelect(event, album: Album) {
    this.selectAlbum.emit(album);
  }
}
