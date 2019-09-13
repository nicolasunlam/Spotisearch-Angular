import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor(private _http:  HttpClient) { }
  
  search(queryString: string) {
    const url = `https://api.spotify.com/v1/${queryString}`;
    const headers = new HttpHeaders({Authorization: "Bearer BQBaKBPARaLAHL-LhkrBdALai7PDnizLMgzNNPGtPfuUpH-vjv73llh54OZUfp7s1BBl3gHm-LnpDI8GJq2xdHtu2llNJ2gUkj2P45yq_myQTwUSRixvfgvz8PjuUbfN7wy4wgFnoJWG5PoGZCvyhFFVdscCwgxCjRi0GxXMywANrqc"
  });
  
  return this._http.get(url, {headers});
}
getArtist(queryString: string) {
  return this.search(`search?q=${queryString}&type=artist&limit=15`).pipe(
    map(data => data["artists"].items)
    );
  }
}


