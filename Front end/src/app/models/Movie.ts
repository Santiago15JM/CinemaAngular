export class Movie {
  _id?: string;
  title: string;
  movieid: string;
  year: number;
  description: string;
  trailerLink: string;
  cover: string;
  casting: string[];

  constructor(title: string, movieid: string, year: number, description: string, trailerLink: string, cover: string, casting: string[]) {
    this.title = title
    this.movieid = movieid
    this.year = year
    this.description = description
    this.trailerLink = trailerLink
    this.cover = cover
    this.casting = casting
  }
}