import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


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
   const id = '0TnOYISbd1XYRBk9myaseg';
    this._Http.get('https://api.spotify.com/v1/artists/${id}/albums',{ headers: new HttpHeaders(
      { Authorization:'Bearer BQBAKOCtrOiOA2eY2CU7Er-4yBtb14cq5PkX1XO65ssEZnCxwLZZG5ku6hWLvOaUX2J_0ixURx5AVLlvNOeKWZSBaKoPS2fH4PgO7bRLUQFa3Mnyu66P5EFKHcISGsIwxH21r3Au-uccgN_H-Iee3ilfdmitnmSFzamFqFPLtgLaGV8'})
    }).subscribe(({artist}: any) => {
      debugger
      this.artists = artist.items;
      artists => console.log(artists);
    }); 
    }
  }

