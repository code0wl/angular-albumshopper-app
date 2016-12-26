import { ShoppingService } from './shopping-cart/shared/services/shopping.service';
import { ShoppingListComponent } from './shopping-cart/shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MusicModule } from './music/music.module';
import { Routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    MusicModule,
    RouterModule,
    Routing
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
