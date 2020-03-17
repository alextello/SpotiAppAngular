import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
   }

   getNewReleases(){
     const HEADERS = new HttpHeaders({
       Authorization: 'Bearer BQCkCWwC_zUYfIQSJ0cenUPkyRKMlrSGNqLb9MMlv4iB0-BQd-8Sm-G5VfD-xxcH5DZJc7CQ7cIJ40ClHkM'
     });
     return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {  headers: HEADERS })
               .pipe( map( (data: any) => {
                return data.albums.items;
               }));
   }

   getArtista(termino: string) {
    const HEADERS = new HttpHeaders({
      Authorization: 'Bearer BQCkCWwC_zUYfIQSJ0cenUPkyRKMlrSGNqLb9MMlv4iB0-BQd-8Sm-G5VfD-xxcH5DZJc7CQ7cIJ40ClHkM'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {  headers: HEADERS })
              .pipe( map( (data: any) =>{
                return data.artists.items;
              }));
   }
}
