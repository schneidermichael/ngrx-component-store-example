import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { MoviesState } from '../interfaces';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {
  constructor() {
    super({ movies: [] });
  }

  readonly movies$: Observable<Movie[]> = this.select((state) => state.movies);

  readonly addMovie = this.updater((state, movie: Movie) => ({
    movies: [...state.movies, movie],
  }));

  readonly fetchMoviesData$ = this.select(
    {
      currentMovies: this.movies$,
    },
    { debounce: true } // 👈 setting this selector to debounce
  );
}
