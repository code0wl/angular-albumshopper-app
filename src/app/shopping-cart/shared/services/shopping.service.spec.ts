import { albumStub } from './../../../../assets/data/albums.stub';
import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingService } from './shopping.service';

describe('ShoppingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingService]
    });
  });

  it('should be empty', inject([ShoppingService], (service: ShoppingService) => {
    expect(service.albums.length).toEqual(0);
  }));

  it('should allow value to be added to cart', inject([ShoppingService], (service: ShoppingService) => {
    service.albums.push(albumStub);
    expect(service.albums.length).toBeGreaterThan(0);
  }));
});
