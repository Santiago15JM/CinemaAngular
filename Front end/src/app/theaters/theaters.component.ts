import { Component, EventEmitter, OnInit, Output, OnChanges, Input } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Theater } from '../models/Theater';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {

  @Output() emmiter = new EventEmitter<Theater>();

  @Input() theaters!: [Theater]
  selTheater!: Theater
  tElements: any

  constructor() {
  }
  
  ngOnInit(): void {
    this.tElements = document.getElementsByClassName('card')
    this.emmiter.emit(this.selTheater)
  }

  changeTheater(theater: any) {
    const dvTh = document.getElementById('div' + theater.name)

    for (const i of this.tElements) {
      i.classList.remove('selected')
    }
    dvTh?.classList.add('selected')
    this.selTheater = theater

    this.emmiter.emit(this.selTheater)
  }

}
