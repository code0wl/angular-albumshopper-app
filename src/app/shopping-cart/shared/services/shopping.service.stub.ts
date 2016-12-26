import { Album } from './../../../music/shared/models/album.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingServiceStub {
    albums: Array<Album> = [];
    addToCart() {
        return;
    }
}
