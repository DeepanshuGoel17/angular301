// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';      
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
import { Store, State } from '@ngrx/store';

import {Component, Directive} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeService} from '../../services/home.service';
import { of } from 'rxjs';

@Injectable()
class StoreMock {
    // How we did it before
    select = jasmine.createSpy().and.returnValue(of('quote'));
    dispatch = jasmine.createSpy();
}

@Injectable()
class MockHomeService {
    getNowshowing(page){}
    getUpcomingMovies(page){}
    getGenres(){}
 }

describe('HomeComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      providers: [
        { provide: Store, useClass: StoreMock },      
        {provide: HomeService, useClass: MockHomeService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    const result = component.ngOnInit();
  });

  it('should run #getNewSetofNowPlayingMovies()', async () => {
      let page= "3"
    const result = component.getNewSetofNowPlayingMovies(page);
  });

  it('should run #getNewSetofComingMovies()', async () => {
      let page = "3"
    const result = component.getNewSetofComingMovies(page);
  });

});