import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './movie-list/movie-list/movie-list.component';
import { MovieViewComponent } from './movie-view/movie-view/movie-view.component';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieViewComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
