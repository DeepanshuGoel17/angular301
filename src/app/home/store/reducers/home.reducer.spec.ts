import { async } from '@angular/core/testing';
import { Directive } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { SetNowPlayingMovies, SetUpcomingMovies, SetCastAndCrew, SetTheaters } from '../actions/home.action';
import { Movie } from '../../models/movie.model';
import { State } from '@ngrx/store';
import { Theater } from '../../models/theater.model';
import { moviesReducer } from './home.reducer';
import { } from './home.reducer';

import { } from './home.reducer';


describe('Reducer test', () => {

    beforeEach(() => {
    });
    it('should test nowplaying', async () => {
        const action = new SetNowPlayingMovies([{
            title: 'Title',
            id: 1,
            popularity: 'string',
            poster_path: 'string',
            release_date: 'string',
            original_language: 'hindi',
            overview: 'overview',
            genre_ids: 'any',
            vote_average: 2,
            vote_count: 2,
        }]);

        // userReducer(UserState, action);
        const result = moviesReducer(undefined, action);
        const expectedResult = {
            nowPlayingMovies: [{
                title: 'Title',
                id: 1,
                popularity: 'string',
                poster_path: 'string',
                release_date: 'string',
                original_language: 'hindi',
                overview: 'overview',
                genre_ids: 'any',
                vote_average: 2,
                vote_count: 2,
            }],
            upcomingMovies: [],
            setTheaters: [],
        };

        expect(result).toEqual(expectedResult);
    });
    it('should test setUpcoming', async () => {
        const action = new SetUpcomingMovies([{
            title: 'TitleMindtree',
            id: 1,
            popularity: 'string',
            poster_path: 'string',
            release_date: 'string',
            original_language: 'hindi',
            overview: 'overview',
            genre_ids: 'any',
            vote_average: 2,
            vote_count: 2,
        }]);

        // userReducer(UserState, action);
        const result = moviesReducer(undefined, action);
        const expectedResult = {
            nowPlayingMovies: [],
            upcomingMovies: [{
                title: 'Title',
                id: 1,
                popularity: 'string',
                poster_path: 'string',
                release_date: 'string',
                original_language: 'hindi',
                overview: 'overview',
                genre_ids: 'any',
                vote_average: 2,
                vote_count: 2,
            }],
            setTheaters: [],
        };
        expect(result).not.toEqual(expectedResult);
    });
    it('should test USerReducer', async () => {
        const action = new SetTheaters([{
            title: 'Title',
            id: 1,
            popularity: 'string',
            poster_path: 'string',
            release_date: 'string',
            original_language: 'hindi',
            overview: 'overview',
            genre_ids: 'any',
            vote_average: 2,
            vote_count: 2,
        }]);

        // userReducer(UserState, action);
        const result = moviesReducer(undefined, action);

        expect(result).toBeTruthy();
    });
});
