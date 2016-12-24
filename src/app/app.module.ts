import { AlbumService } from './music/shared/services/album.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AlbumsComponent } from './music/albums/albums.component';
import { AlbumComponent } from './music/album/album.component';
import { AlbumDetailComponent } from './music/album-detail/album-detail.component';
import { ShoppingListComponent } from './shopping-cart/shopping-list/shopping-list.component';
import { ShoppingControlsComponent } from './shopping-cart/shopping-controls/shopping-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AlbumsComponent,
    AlbumComponent,
    AlbumDetailComponent,
    ShoppingListComponent,
    ShoppingControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
