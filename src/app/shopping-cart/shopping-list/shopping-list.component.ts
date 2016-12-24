import { Subscription } from 'rxjs';
import { AlbumService } from './../../music/shared/services/album.service';
import { Album } from './../../music/shared/models/album.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  albums: Array<Album>;
  subscription: Subscription;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.subscription = this.albumService.albums.subscribe(albums => this.albums = albums);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
