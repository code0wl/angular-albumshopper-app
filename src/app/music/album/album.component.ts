import { Album } from './../shared/models/album.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  @Input() album: Album;
}
