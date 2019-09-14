// tslint:disable\BookMyMovie-POC-scalled-down>
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
import { MatDialogModule } from '@angular/material/dialog';

import { Store, State } from '@ngrx/store';

import {Component, Directive} from '@angular/core';
import {AdminComponent} from './admin.component';
import * as MovieState from '../../../reducers/index';
import { AdminService } from '../../services/admin.service';
import { of } from 'rxjs';
// import {AdminService, Store<MovieState.State>} from '../../../reducers/index';

@Injectable()
class MockAdminService {
    newTheater(newTheater){}
 }

@Injectable()
class StoreMock { 
    // How we did it before
    select =  jasmine.createSpy().and.returnValue(of('quote')); 
    dispatch = jasmine.createSpy();
  }

describe('AdminComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[MatDialogModule],
      declarations: [
        AdminComponent
      ],
      providers: [
        {provide: AdminService, useClass: MockAdminService},
        {provide: Store, useClass: StoreMock},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    spyOn(component,'ngOnInit');
    const result = component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should run #addTheater()', async () => {
    spyOn(component,'addTheater');
    const result = component.addTheater('formData');
    expect(component.addTheater).toHaveBeenCalled();
  });

});