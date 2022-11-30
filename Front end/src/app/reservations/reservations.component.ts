import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Function, Reservation } from '../models/Function';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor(private dbService: DatabaseService) { }

  selSeats = new Set<string>()
  @Input() func?: Function
  bill = 0
  reservedSeats: string[] = []

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.isReserved()
    //Tachar los ocupados
    this.reservedSeats.forEach(seat => {
      document.getElementById('s'+seat)?.classList.add('reserved')
    });
  }

  toggleSeat(i: string) {
    const seat = document.getElementById("s" + i)
    if (!seat?.classList.contains('selected')) {
      seat?.classList.add('selected')
      this.selSeats.add(i)
      this.bill += 9000
      console.log(this.selSeats)
    }
    else {
      seat?.classList.remove('selected')
      this.selSeats.delete(i)
      this.bill -= 9000
      console.log(this.selSeats)
    }
  }

  makeReservation() {
    let dateElement: any = document.querySelector('input[name="reservation"]:checked');
    let date
    if (dateElement != null) {
      date = dateElement.value
    } else {
      alert('Selecciona una fecha')
      return
    }

    let user = (document.getElementById('user') as any).value
    if (user == '') {
      alert('Ingresa tu nombre')
      return
    }

    if (this.selSeats.size == 0) {
      alert('Selecciona los asientos')
      return
    }

    let reservation = new Reservation(user, Array.from(this.selSeats), new Date(date));

    console.log(reservation);
    this.dbService.makeReservation(this.func?._id!, reservation)
    // Recargar pagina
  }

  parseDate(date: Date): String {
    let ndate = new Date(date)
    return `${ndate.toLocaleDateString()} ${ndate.toLocaleTimeString()}`
  }

  isReserved() {
    this.func?.reservations.forEach(r => {
      this.reservedSeats = this.reservedSeats.concat(r.seats)
    })
  }
}


