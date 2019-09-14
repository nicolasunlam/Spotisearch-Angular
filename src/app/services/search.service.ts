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
    const headers = new HttpHeaders({Authorization: "Bearer BQDEE0ruK0IdK5nwlu-04A9niTyYCgw9kBbBEWPft8jFRGMD030mYRy50dwGKC0KZ73U42UvtKUJNvopemT37jGWhYN44hQ0KFehHnRkj45juoPImBV6ovWCUUVlmDau6FgHtWOSrXHiNupOGgmi4xzj-dxsAaJbMn9cbAWYM3NiL4U"
  });
  
  return this._http.get(url, {headers});
}

searchArtist(queryString: string) {
  
  return this.search(`search?q=${queryString}&type=artist&limit=10`).pipe(
    map(data => data["artists"].items)
    );
  }
  
}


