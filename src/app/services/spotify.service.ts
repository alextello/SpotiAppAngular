import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
   }

   getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCx0tWem1dxHdxp6ps9cKgjHAI0OfHogS-4KyXT42FOP-SHz8AagvAKd7LzME9XdCoalwlD1_eesLWQvJ4'
    });
    return this.http.get(url, {headers});
   }

   getNewReleases() {

     return this.getQuery('browse/new-releases?limit=20')
                  .pipe( map( (data: any) => {
                  return data.albums.items;
                 }));
   }

   getArtista(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map( (data: any) => {
                return data.artists.items;
              }));
   }
}
