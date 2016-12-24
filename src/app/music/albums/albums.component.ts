import { Album } from './../shared/models/album.model';
import { AlbumService } from './../shared/services/album.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums: Array<Album>;
  subscription: Subscription;
  @Output() selectAlbum: EventEmitter<Album> = new EventEmitter();

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.subscription = this.albumService.albums.subscribe((albums: Array<Album>) => this.albums = albums);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelect(event, album: Album) {
    this.selectAlbum.emit(album);
  }
}
