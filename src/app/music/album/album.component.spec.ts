import { albumStub } from './../../../assets/data/albums.stub';
import { AlbumsComponent } from './../albums/albums.component';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AlbumComponent } from './Album.component';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let albumElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumComponent, AlbumsComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    albumElement = fixture.debugElement.query(By.css('.album-name'));
    component.album = albumStub;
    fixture.detectChanges();
  });

  it('should get values from albums', () => {
    expect(albumElement.nativeElement.textContent).toEqual('THE WONDER OF YOU');
  });

});
