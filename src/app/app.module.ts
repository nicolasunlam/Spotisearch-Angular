import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SboxComponent } from './components/sbox/sbox.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavsComponent } from './components/favs/favs.component';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SboxComponent,
    FooterComponent,
    FavsComponent,
    ArtistComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
