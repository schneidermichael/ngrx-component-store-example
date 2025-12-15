import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MoviesStore } from '../stores';
import { MatButtonModule } from '@angular/material/button';
import { MoviesButtonComponent } from './movies-button/movies-button.component';

@Component({
    selector: 'app-movies-pages',
    templateUrl: './movies-pages.component.html',
    styleUrl: './movies-pages.component.scss',
    providers: [MoviesStore],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, MatButtonModule, MoviesButtonComponent]
})
export class MoviesPagesComponent {
  movies$ = this.moviesStore.movies$;

  constructor(private readonly moviesStore: MoviesStore) {}
}
