import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillboardComponent } from './billboard/billboard.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'billboard', component: BillboardComponent },
  { path: 'functions/details/:funcId', component: MovieDetailsComponent },
  { path: 'movie/details/:movieId', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
