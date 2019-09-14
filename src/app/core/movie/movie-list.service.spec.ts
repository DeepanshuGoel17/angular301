import { async } from '@angular/core/testing';
import {MovieListService} from './movie-list.service';

describe('MovieListService', () => {
  let service;

  const httpClient: any = {
    // mock properties here
  }

  beforeEach(() => {
    service = new MovieListService(httpClient);
  });

  it('should run #getLanguageList()', async () => {
  let  movieList = [ {
    original_language: 'hi'
  },{
      original_language: 'hi'
  }
  ]
    const result = service.getLanguageList(movieList);
  });

});
