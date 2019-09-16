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
    const headers = new HttpHeaders({Authorization: "Bearer BQAPXHBcVbCcgwsBQn6Agon7YhgiSBJkrPHUQxe63wsUUJAOx7R2wceg-pw6OFYzjJI99w5akhtOYwjjnkhMMI6InesHfziGDKCkB8JuoDluMgAb831VFZhkI5IvQ6Q-SVhbYlBKr5o6Py9ZGNmn337UW8cW3vN8Sxxqq-MqHfz-Ddc"
  });
  
  return this._http.get(url, {headers});
}

searchArtist(queryString: string) {
  
  return this.search(`search?q=${queryString}&type=artist&limit=10`).pipe(
    map(data => data["artists"].items)
    );
  }
  
}


