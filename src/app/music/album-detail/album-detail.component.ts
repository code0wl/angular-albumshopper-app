import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumService } from './../shared/services/album.service';
import { Album } from './../shared/models/album.model';
import { ShoppingService } from './../../shopping-cart/shared/services/shopping.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit, OnDestroy {
  albumName: string;
  routerSubscription: Subscription;
  selectedAlbum: Album;

  constructor(
    private activatedRoute: ActivatedRoute,
    private shoppingService: ShoppingService,
    private albumService: AlbumService) {
  }

  ngOnInit() {
    this.routerSubscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        this.albumName = params['name'];
        this.selectedAlbum = this.albumService.selectedAlbumItem;
      });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  addToCart(event, selectedAlbum) {
    this.shoppingService.addToCart(selectedAlbum);
  }
}
