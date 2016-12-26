import { Artist } from './artist.model';

export interface Album {
    title: string;
    release: string;
    cover: string;
    label: string;
    genres: Array<string>;
    artists: Array<Artist>;
}
