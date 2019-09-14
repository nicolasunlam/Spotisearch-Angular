import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  results: any[] [];

  constructor(private _searchService: SearchService) { }
  
  search(queryString: string) {
    console.log(queryString);
    
    this._searchService.searchArtist( queryString )
    .subscribe( (data: any) => {
      console.log(data);
      this.results = data;
    });
  }

  
}
