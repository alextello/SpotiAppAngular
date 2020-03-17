import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
   }

   getNewReleases(){
     const HEADERS = new HttpHeaders({
       Authorization: 'Bearer BQDJAsPxlwVCktEBXee-bv14vKWGvwuCINqzQARpHF2zp7_6040ZDpZyxZdCw0sGkEJ8BIHc-fUwlSGCfTs'
     });
     this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {  headers: HEADERS })
          .subscribe( data => {
            console.log(data);
          });
   }
}
