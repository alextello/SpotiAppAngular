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
      Authorization: 'Bearer BQAdI8djsbjHFKRXyh02BRqZTSyyJO3U-5i-GBFoFIOqH4EP6YjPtRbbJOEe6efqKinO8UIU5wcU15-GmTc'
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
