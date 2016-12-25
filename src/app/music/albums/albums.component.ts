import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.albumService.albums.subscribe((albums: Array<Album>) => this.albums = albums);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelect(event, album: Album) {
    this.router.navigate(['albums', album.title]);
    this.albumService.selectedAlbumItem = album;
  }
}
