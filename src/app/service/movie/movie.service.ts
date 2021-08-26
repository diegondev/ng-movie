import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractCrudService } from 'src/app/core/abstract/service/abstract-crud/abstract-crud.service';
import { MovieModel } from 'src/app/model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends AbstractCrudService<MovieModel> {

  constructor(http: HttpClient) {
    super(http, '/filmes.json');
  }
}
