import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Function } from '../models/Function';
import { Movie } from '../models/Movie';
import { Theater } from '../models/Theater';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  @Input() selTheater!: Theater;

  functions: Function[] = []
  billboard: Movie[] = [];
  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.getFunctions()
  }

  ngOnChanges() {
    this.getFunctions()
  }

  getFunctions() {
    this.billboard = [];
    this.functions = [];
    
    this.dbService.getFunctions(this?.selTheater._id!).subscribe(data => {
      // console.log('getting functions, th id: ' + this.selTheater._id);
      let theater: Theater = data

      theater.functions.forEach(func => {
        this.functions.push(func as any as Function)
        this.billboard.push((func as any).movie)
      });

    })
  }

  // getMovies() {
  //   this.dbService.getMovies(/* get movies of certain function */).subscribe(data => {
  //     this.billboard = data;
  //     console.log('got movies');
  //   })
  // }
}
