import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Theater } from '../models/Theater';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  theaters!: [Theater]
  selTheater!: Theater

  constructor(private dbService: DatabaseService) {
    this.getTheaters()
  }

  ngOnInit(): void {
  }

  setTheater(theater: Theater) {
    this.selTheater = theater
    console.log('set theater: ' + this.selTheater.name);
  }

  getTheaters() {
    this.dbService.getTheaters().subscribe(data => {
      this.theaters = data
    })
  }
}
