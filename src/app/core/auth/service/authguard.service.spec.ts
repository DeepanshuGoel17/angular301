import { async } from '@angular/core/testing';
import {AuthGuard} from './authguard.service';
import { Store, State } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
class MockRouter {
    navigate(path) {}
}
  @Injectable()
class StoreMock { 
    // How we did it before
    select =  jasmine.createSpy().and.returnValue(of('quote')); 
    dispatch = jasmine.createSpy();
  }

  
describe('AuthGuard', () => {
    describe('canActivate', () => {
      let authGuard: AuthGuard;
      let authService;
      let router;
      let state;
  
      it('should return true for a logged in user', () => {
        authService = { isLoggedIn: () => true };
        router = new MockRouter();
        state = new StoreMock();
        authGuard = new AuthGuard(router, state);
        
  
        expect(authGuard.canActivate(router, state)).toEqual(true);
      });

      it('should return true for a logged in user', () => {
        authService = { isLoggedIn: () => true };
        router = new MockRouter();
        state = new StoreMock();
        authGuard = new AuthGuard(router, state);
        
  
        expect(authGuard.canLoad(state)).toEqual(true);
      });
    });
  });