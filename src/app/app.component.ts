import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesPagesComponent } from './movies-pages/movies-pages.component';
import { MoviesButtonComponent } from './movies-pages/movies-button/movies-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, MoviesPagesComponent, MoviesButtonComponent],
})
export class AppComponent {
  title = 'ngrx-component-store-example';
}
