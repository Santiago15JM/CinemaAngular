import { Movie } from "./Movie";

export class Function {
    _id?: string;
    room: number;
    movie: Movie;
    reservations: [Reservation];
    schedules: [Date];

    constructor(room: number, movie: Movie, reservations: [Reservation], schedules: [Date]) {
        this.room = room
        this.movie = movie
        this.reservations = reservations
        this.schedules = schedules
    }
}

export class Reservation {
    user: string;
    seats: string[];
    date: Date;

    constructor(user: string, seats: string[], date: Date) {
        this.user = user
        this.seats = seats
        this.date = date
    }
}