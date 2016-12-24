import { AlbumService } from './../../music/shared/services/album.service';
import { Album } from './../../music/shared/models/album.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  albums: Array<Album>;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albums = this.albumService.cartCollection;
  }

}
