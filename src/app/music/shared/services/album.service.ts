import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Album } from './../models/album.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {
  cartCollection: Array<Album> = [];
  constructor(private http: Http) { }

  get albums(): Observable<Array<Album>> {
    return this.http
      .get('../../../../assets/data/albums.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  addToCartCollection(album) {
    this.cartCollection.push(album);
  }

  private extractData(res: Response): Observable<Array<Album>> {
    const body = res.json();
    return body;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }

}
