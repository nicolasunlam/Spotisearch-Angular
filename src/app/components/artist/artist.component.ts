import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  
  private artists: [];
  constructor(private _Http: HttpClient) {
      
   }
  
  ngOnInit() {
   const searchQuery = 'Muse';
    this._Http.get('https://api.spotify.com/v1/search?q=${searchQuery}&type=artist',{ headers: new HttpHeaders(
      { Authorization:'Bearer BQAlK9A1a9lF7IoljjMUFwkr3O-f1hPP2i2z5RgOMDqNlPHi76qP4EZOlv33l0AWGFPqOXVFBnNFgKQGdx0voniTF4XqnfyeH1P-fQ09W3fk11lvZnmel-UFJh_TWrk5jUcTH8WYHdsmTngZi-RBq_2bIfveEs3d3v5D0e1J4l_5dHs'})
    }).subscribe(({artist}: any) => {
      debugger
      this.artists = artist.items;
      artists => console.log(artists);
    }); 
    }
  }

