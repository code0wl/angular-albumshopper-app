import { AlbumServiceMock } from './../shared/services/album.service.mock';
import { HttpModule } from '@angular/http';
import { AlbumService } from './../shared/services/album.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AlbumComponent } from './../album/album.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AlbumsComponent } from './Albums.component';

describe('AlbumsComponent', () => {
    let component: AlbumsComponent;
    let fixture: ComponentFixture<AlbumsComponent>;
    let albumService: AlbumService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AlbumsComponent, AlbumComponent],
            imports: [RouterTestingModule, HttpModule],
            providers: [
                {
                    provide: AlbumService,
                    useValue: AlbumServiceMock
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AlbumsComponent);
        component = fixture.componentInstance;
        albumService = fixture.debugElement.injector.get(AlbumService);
        fixture.detectChanges();
    });

    it('should retrieve data from server', () => {
        expect(component.albums.length).toBeGreaterThan(0);
    });

     it('should transfer data to component correctly', () => {
        expect(component.albums).toEqual(albumService.cartCollection);
    });

});
