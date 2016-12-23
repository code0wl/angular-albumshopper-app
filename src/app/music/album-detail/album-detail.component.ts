import { Album } from './../shared/models/album.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  @Input() selectedAlbum: Album;
}
