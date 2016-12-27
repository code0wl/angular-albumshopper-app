import { Album } from './../models/album.model';
import { Http, HttpModule } from '@angular/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { AlbumService } from './album.service';

describe('AlbumService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AlbumService],
            imports: [HttpModule]
        });
    });

    it('should request items', inject([AlbumService], (service: AlbumService) => {
        service.albums.subscribe((album: Array<Album>) => {
            expect(album.length).toBeGreaterThan(0);
        })
    }));
});
