import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private client_id: string = '6282584714404c54bcaec096ad41f463';//&client_id`+this.client_id NOT USED
  constructor(private _http:  HttpClient) { }
  
  search(queryString: string) {
    const url = `https://api.spotify.com/v1/${queryString}`;
    const headers = new HttpHeaders({Authorization: "Bearer BQB_dQPJ9v43Iw4pSZUAq1aa9q8MIGayUQ_nUdH2UO2seTz4Qx2vBobDrnOUkx2nueD5tjrpV5YJUkuxF8qDzIDomZEQw7kYs1ZjqHPCPoGN-8_E4zVkQEghExtpXpT55RgICFbo0R9AS4qUakVUDOOLjB66uX4MUQv-CaaYLgG_I-0"
  });
  
  return this._http.get(url, {headers});
}

searchArtist(queryString: string) {
  
  return this.search(`search?q=${queryString}&type=artist&limit=10`).pipe(
    map(data => data["artists"].items)
    );
  }
  
}


