import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from './models/Function';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  url = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  getMovie(movieid: String): Observable<any> {
    return this.http.get(this.url + 'getMovie/' + movieid)
  }

  getBillboard(): Observable<any> {
    return this.http.get(this.url + 'getBillboard/')
  }

  getFunctions(theaterid: string): Observable<any> {
    return this.http.get(this.url + 'getFunctions/' + theaterid)
  }

  getFunction(funcid: string): Observable<any> {
    return this.http.get(this.url + 'getFunction/' + funcid)
  }

  getTheaters(): Observable<any> {
    return this.http.get(this.url + 'getTheaters/')
  }

  makeReservation(funcId: string, reservation: Reservation) {
    this.http.put(this.url + 'makeReservation/' + funcId, reservation).subscribe()
  }
}
