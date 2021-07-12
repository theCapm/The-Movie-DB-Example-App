import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  constructor(private http: HttpClient) {}

  getPopular(): any {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/popular?api_key=df8329b05398360ed0cfffa3b1fa3195&language=en-US&page=1'
    );
  }

  getProviders(movie_id: any): any {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/' +
        `${movie_id}` +
        '/watch/providers?api_key=df8329b05398360ed0cfffa3b1fa3195'
    );
  }

  getTrailers(movie_id: any): any {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/' +
        `${movie_id}` +
        '/videos?api_key=df8329b05398360ed0cfffa3b1fa3195&language=en-US'
    );
  }
}
