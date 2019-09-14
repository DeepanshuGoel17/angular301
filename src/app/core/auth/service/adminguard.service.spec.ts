import { async } from '@angular/core/testing';
import {AdminguardService} from './adminguard.service';
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
      let authGuard: AdminguardService;
      let authService;
      let router;
      let state;
  
      it('should return false for a not logged in user', () => {
        authService = { isLoggedIn: () => true };
        router = new MockRouter();
        state = new StoreMock();
        authGuard = new AdminguardService(router, state);
        
  
        expect(authGuard.canActivate(router, state)).toEqual(false);
      });
    });
  });