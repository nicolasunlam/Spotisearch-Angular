import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-sbox',
  templateUrl: './sbox.component.html',
  styleUrls: ['./sbox.component.scss']
})
export class SboxComponent implements OnInit {

  private artists: [];
  constructor(private _Http: HttpClient) {
      
   }
  
  ngOnInit() {
   const searchQuery = 'Muse';
    this._Http.get('https://api.spotify.com/v1/search?q=${searchQuery}',{ headers: new HttpHeaders(
      { Authorization:'Bearer BQBDd8Oj8kNxf-8r8y9ylbX8kAQXaEENzLD6Lc40X-aM5kinpnMMP-GFLNp8xgHjiJIQXCT0iumZgCHqJ93LlbxKqxpQFzXpHePZStBuxKL4yXyt7GSTQ-YIaI4wQKJ6GmnAffmdkpQZSwVtrTQoGnAJKKaSWavg0UDlfM4vUk_KBng'})
    }).subscribe(({artist}: any) => {
      debugger
      this.artists = artist.items;
      artists => console.log(artists);
    }); 
    }
  }
