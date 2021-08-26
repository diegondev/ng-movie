import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AbstractCrudService } from 'src/app/core/abstract/service/abstract-crud/abstract-crud.service';
import { MovieModel } from 'src/app/model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends AbstractCrudService<MovieModel> {

  constructor(http: HttpClient) {
    super(http, '/filmes.json');
  }

  getOne(id: string): Observable<any> {
    return from(
      this.http.get<MovieModel[]>(this.BASE_URL)
      .toPromise()
      .then(data => {
        return data.find(item => item.pid === id)
      })
    );
  }
}
