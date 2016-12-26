import { Routes } from '@angular/router';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

export const musicRoutes: Routes = [
    { path: ':name', component: AlbumDetailComponent }
];
