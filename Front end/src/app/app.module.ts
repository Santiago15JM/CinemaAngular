import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { TheatersComponent } from './theaters/theaters.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { HttpClientModule } from '@angular/common/http';
import { BillboardComponent } from './billboard/billboard.component'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MoviesComponent,
    MovieDetailsComponent,
    HomeComponent,
    TheatersComponent,
    ReservationsComponent,
    BillboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
