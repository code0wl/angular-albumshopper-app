import { Album } from './../shared/models/album.model';
import { AlbumService } from './../shared/services/album.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums: Array<Album>;
  selectedAlbum: Album;
  subscription: Subscription;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
    this.subscription = this.albumService.albums
      .subscribe((albums: Array<Album>) => {
        this.albums = albums;
        this.albumService.cartCollection = albums;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
