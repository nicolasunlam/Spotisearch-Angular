import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  private artist: any[] = [];
  
  API_KEY:'6282584714404c54bcaec096ad41f463';
  constructor(private Http: HttpClient) { }
  
  getData(searched: string){
    let url: 'api.spotify.com/v1/search?q=${searched}';
    
    return this.Http.get(url, { headers: new HttpHeaders({
      "Authorization":
      "Bearer BQB0mBNPmfCq5EgNEpf9r572KZCtSevVWr7IazhxN7LP3FyEHJ5iWm6R1YM2QFy34x1jfDXrBVhsVv9eSECBJ3ZwRpnvrPYXCxreaw4L03_NKxZ_x2ndpMyozv0a6Lm1Rl5UAAz8NCPG7f5twDLObfnUy5MiYGTYIshCK3PmBV9mU-w"}) });
    
  }
  
}
