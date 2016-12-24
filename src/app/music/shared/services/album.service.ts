import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Album } from './../models/album.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {
  constructor(private http: Http) { }

  get albums(): Observable<Array<Album>> {
    return this.http
      .get('../../../../assets/data/albums.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): Observable<Array<Album>> {
    const body = res.json();
    return body;
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }

}
