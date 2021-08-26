import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/service/movie/movie.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {
  public movieId: string | undefined;
  public movie: MovieModel = {
    nome: '',
    ano: 0,
    poster: '',
    descricao: '',
    diretor: '',
    genero: '',
    pid: '',
    statusEntity: ''
  };

  constructor(
    public service: MovieService,
    public route: ActivatedRoute,
    private _location: Location
  ) {
    route.paramMap.subscribe(params => {
      this.movieId = params.get('id') ?? '';
      console.log(this.movieId)
    });
  }

  ngOnInit(): void {
    this.service.getOne(this.movieId ?? '0').subscribe(response => {
      this.movie = response;
    });
  }

  onBack() {
    this._location.back();
  }
}

