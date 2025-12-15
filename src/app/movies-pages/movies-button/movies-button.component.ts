import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MoviesStore } from '../../stores';
import { Movie } from '../../models';

@Component({
    selector: 'app-movies-button',
    imports: [MatButtonModule],
    templateUrl: './movies-button.component.html',
    styleUrl: './movies-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesButtonComponent {
  readonly moviesStore = inject(MoviesStore)

  public add() {

    let newMovie : Movie = {name:"Harry Potter", id:Math.random()}
    this.moviesStore.updateMovie(newMovie);
  }

  public consoleLog() {
    console.log(this.moviesStore.movies());
  }
}
