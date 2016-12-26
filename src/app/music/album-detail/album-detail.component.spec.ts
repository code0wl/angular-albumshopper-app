import { AlbumServiceStub } from './../shared/services/album.service.stub';
import { ShoppingServiceStub } from './../../shopping-cart/shared/services/shopping.service.stub';
import { HttpModule } from '@angular/http';
import { AlbumService } from './../shared/services/album.service';
import { ShoppingService } from './../../shopping-cart/shared/services/shopping.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { AlbumDetailComponent } from './album-detail.component';

describe('AlbumDetailComponent', () => {
  let component: AlbumDetailComponent;
  let fixture: ComponentFixture<AlbumDetailComponent>;
  let albumService = AlbumService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumDetailComponent],
      providers: [
        {
          provide: ShoppingService,
          useValue: ShoppingServiceStub
        },
        {
          provide: AlbumService,
          useValue: AlbumServiceStub
        }],
      imports: [RouterTestingModule, HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailComponent);
    component = fixture.componentInstance;
    albumService = fixture.debugElement.injector.get(AlbumService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
