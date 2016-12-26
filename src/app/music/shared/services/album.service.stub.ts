import { Observable } from 'rxjs';
import { Album } from './../models/album.model';
import { Injectable } from '@angular/core';

export const AlbumServiceStub = {
    cartCollection: [{
        title: 'THE WONDER OF YOU',
        release: '2010',
        cover: 'https://photos.prnewswire.com/prnvar/20160907/405303?max=1600',
        label: 'somelabel',
        genres: ['Pop'],
        artists: [{ name: 'Elvis Presley' }]
    }],

    get albums(): Observable<Array<Album>> {
        return Observable.of(this.cartCollection)
    },

    getSelectedAlbum(albumName: string): void {
        return;
    }
}
