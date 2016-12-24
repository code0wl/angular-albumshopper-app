import { ShoppingService } from './../shared/services/shopping.service';
import { Album } from './../../music/shared/models/album.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  addedAlbums: Array<Album>;

  constructor(private ShoppingService: ShoppingService) { }

  ngOnInit() {
    this.addedAlbums = this.ShoppingService.albums;
  }
}
