import { albumStub } from './../../../assets/data/albums.stub';
import { ShoppingServiceMock } from './../shared/services/shopping.service.mock';
import { ShoppingService } from './../shared/services/shopping.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;
  let shoppingService: ShoppingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListComponent],
      providers: [{
        provide: ShoppingService, useValue: ShoppingServiceMock
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    shoppingService = fixture.debugElement.injector.get(ShoppingService);
    fixture.detectChanges();
  });

  it('Should have an empty shopping list', () => {
    expect(component.addedAlbums.length).toEqual(0);
  });

  it('Should call the shopping list service', () => {
    component.addedAlbums.push(albumStub);
    expect(component.addedAlbums.length).toBeGreaterThan(0);
  });

});

