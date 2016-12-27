import { AlbumServiceMock } from './../shared/services/album.service.mock';
import { ShoppingServiceMock } from './../../shopping-cart/shared/services/shopping.service.mock';
import { Observable } from 'rxjs';
import { albumStub } from './../../../assets/data/albums.stub';
import { HttpModule } from '@angular/http';
import { AlbumService } from './../shared/services/album.service';
import { ShoppingService } from './../../shopping-cart/shared/services/shopping.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AlbumDetailComponent } from './album-detail.component';

describe('AlbumDetailComponent', () => {
    let component: AlbumDetailComponent;
    let fixture: ComponentFixture<AlbumDetailComponent>;
    let albumService = AlbumService;
    let shoppingService = ShoppingService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AlbumDetailComponent],
            providers: [
                {
                    provide: ShoppingService,
                    useValue: ShoppingServiceMock
                },
                {
                    provide: ActivatedRoute,
                    useValue: { 'params': Observable.from([{ name: albumStub.title }]) }
                },
                {
                    provide: AlbumService,
                    useValue: AlbumServiceMock
                }],
            imports: [RouterTestingModule, HttpModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AlbumDetailComponent);
        component = fixture.componentInstance;
        albumService = fixture.debugElement.injector.get(AlbumService);
        shoppingService = fixture.debugElement.injector.get(ShoppingService);
        fixture.detectChanges();
    });

    it('should get the selected album', () => {
        expect(component.albumName).toEqual(albumStub.title);
    });

    it('should dispatch item to cart', () => {
        component.selectedAlbum = albumStub;
        let spy = spyOn(shoppingService, 'addToCart').and.callThrough();
        component.addToCart(event, component.selectedAlbum);
        expect(spy).toHaveBeenCalledWith(component.selectedAlbum);
    });

});
