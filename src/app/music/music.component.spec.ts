import { AlbumService } from './shared/services/album.service';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicComponent } from './music.component';

describe('MusicComponent', () => {
  let component: MusicComponent;
  let fixture: ComponentFixture<MusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MusicComponent, AlbumsComponent, AlbumComponent],
      imports: [RouterTestingModule, HttpModule],
      providers: [AlbumService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the music component', () => {
    expect(component).toBeTruthy();
  });
});
