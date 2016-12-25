import { musicRoutes } from './music/music.routes';
import { Album } from './music/shared/models/album.model';
import { AlbumDetailComponent } from './music/album-detail/album-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MusicComponent } from './music/music.component';
import { Routes, Router, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: '', redirectTo: 'albums', pathMatch: 'full' },
    { path: 'albums', component: MusicComponent, children: musicRoutes },
    { path: '', component: NavigationComponent, outlet: 'navigation' }
];

export const Routing = RouterModule.forRoot(ROUTES);
