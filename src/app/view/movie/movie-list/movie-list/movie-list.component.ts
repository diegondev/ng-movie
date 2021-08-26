import { Component } from '@angular/core';
import { AbstractListComponent } from 'src/app/core/abstract/component/abstract-list/abstract-list';
import { MovieModel } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/service/movie/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent extends AbstractListComponent<MovieModel, MovieService> {

  constructor(service: MovieService) {
    super(service);
  }
}
