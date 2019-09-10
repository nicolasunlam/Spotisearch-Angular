import { Component } from '@angular/core';
import {SpotifyService} from './services/spotify.service'
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotisearch';
}
