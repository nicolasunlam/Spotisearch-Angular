import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavsComponent } from './components/favs/favs.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { ArtistComponent } from './components/artist/artist.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'artist', component: ArtistComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FavsComponent,
    SearchComponent,
    ArtistComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
      )
      
      
    ],
    providers: [SearchService, HttpClient],  
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  