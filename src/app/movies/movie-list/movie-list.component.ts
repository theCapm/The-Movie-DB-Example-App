import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Streaming } from 'src/app/shared/models/streaming.model';
import { Trailers } from 'src/app/shared/models/trailers.model';
import { GetMoviesService } from 'src/app/shared/services/get-movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  private subs = new Subscription();
  @Input() title?: string;
  @Input() content?: string;
  @Input() poster?: string;
  @Input() movie_id?: number;
  providers: Streaming[] = [];
  trailers: Trailers[] = [];

  constructor(private movieHelper: GetMoviesService) {}

  ngOnInit(): void {
    this.getStreamingProviders(this.movie_id);
    this.getTrailers(this.movie_id);
  }

  getStreamingProviders(movie_id: any) {
    this.subs.add(
      this.movieHelper.getProviders(movie_id).subscribe((data) => {
        let output;
        if (data) {
          output = data.results.US.flatrate;
          this.providers = output.map((x) => new Streaming(x));
        } else {
          this.providers = [];
        }
      })
    );
  }

  getTrailers(movie_id: any) {
    this.subs.add(
      this.movieHelper.getTrailers(movie_id).subscribe((data) => {

        let output;
        if (data) {
          output = data.results;
          this.trailers = output.map((x) => new Trailers(x));
          this.trailers = this.trailers.splice(0, 3);
        } else {
          this.trailers = [];
        }
      })
    );
  }
}
