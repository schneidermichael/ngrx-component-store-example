import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MoviesStore } from '../../stores';

@Component({
  selector: 'app-movies-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './movies-button.component.html',
  styleUrl: './movies-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesButtonComponent {
  constructor(private readonly moviesStore: MoviesStore) {}

  public add() {
    this.moviesStore.addMovie({
      name: 'sdfsdf',
      id: 2,
    });
  }

  public consoleLog() {
    this.moviesStore.fetchMoviesData$.subscribe((m) => console.log(m));
  }
}
