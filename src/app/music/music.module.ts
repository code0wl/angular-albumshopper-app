import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { HttpModule } from '@angular/http';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { NgModule } from '@angular/core';
import { MusicComponent } from './music.component';
import { AlbumService } from './shared/services/album.service';
import { ShoppingService } from './../shopping-cart/shared/services/shopping.service';

@NgModule({
    declarations: [
        AlbumComponent,
        AlbumsComponent,
        AlbumDetailComponent,
        MusicComponent
    ],
    imports: [HttpModule, RouterModule, BrowserModule],
    providers: [AlbumService],
    bootstrap: [MusicComponent]
})
export class MusicModule { }
