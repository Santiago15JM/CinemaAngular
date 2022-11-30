import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css']
})
export class BillboardComponent implements OnInit {

  billboard: Movie[] = [];
  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.getFunctions()
  }

  getFunctions() {
    this.dbService.getBillboard().subscribe(data => {
      this.billboard = data;
    })
  }
}
