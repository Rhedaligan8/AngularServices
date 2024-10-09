import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movie: { id: number; title: string; ratings: string; yearpublished: number; }[] = [];
  
  // Properties for Add Movie
  id: number = 0;
  title: string = '';
  ratings: string = '';
  yearpublished: number = 0;

  addMovie() {
    const newMovie = { id: this.id, title: this.title, ratings: this.ratings, yearpublished: this.yearpublished };
    this.movie.push(newMovie);
  }
}
