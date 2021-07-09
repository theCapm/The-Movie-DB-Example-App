import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from '../shared/models/movie.model';
import { GetMoviesService } from '../shared/services/get-movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  private subs = new Subscription();
  movies: Movies[] = [];
  constructor(private movieHelper: GetMoviesService) {}

  ngOnInit(): void {
    this.getNowPlaying();
  }

  getNowPlaying() {
    this.subs.add(
      this.movieHelper.getPopular().subscribe((data: { results: any }) => {
        let output;
        if (data) {
          debugger;
          output = data.results;
          this.movies = output.map((x: { [x: string]: any }) => new Movies(x));
        } else {
          this.movies = [];
        }
      })
    );
  }
}
