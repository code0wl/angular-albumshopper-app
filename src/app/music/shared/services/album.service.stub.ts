import { albumStub } from './../../../../assets/data/albums.stub';
import { Observable } from 'rxjs';
import { Album } from './../models/album.model';
import { Injectable } from '@angular/core';

export const AlbumServiceStub = {
    cartCollection: [albumStub],

    get albums(): Observable<Array<Album>> {
        return Observable.of(this.cartCollection)
    },

    getSelectedAlbum(albumName: string): void {
        return;
    }
}
