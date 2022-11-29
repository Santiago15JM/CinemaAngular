import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Function } from '../models/Function';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie?: Movie;
  func?: Function;
  constructor(private route: ActivatedRoute, private dbService: DatabaseService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.getFunction(String(routeParams.get('funcId')))
  }

  getFunction(funcId: string) {
    this.dbService.getFunction(funcId).subscribe(data => {
      this.func = data as Function
      this.movie = this.func.movie
    })
  }

}
