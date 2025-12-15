import { MoviesState } from '../interfaces';
import { patchState, signalStore,  withMethods, withState } from '@ngrx/signals';
import { Movie } from '../models';

const initialState: MoviesState = {
  movies: []
};

export const MoviesStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    updateMovie(movie: Movie): void {
      patchState(store,  ({ movies: store.movies().concat(movie)} ))
    },
     }))
);
