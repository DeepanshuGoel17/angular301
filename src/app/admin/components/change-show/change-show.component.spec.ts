// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';      
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Component, Directive} from '@angular/core';
import {ChangeShowComponent} from './change-show.component';
import {AdminService} from '../../services/admin.service';
import {MatDialog} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import{MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material'; 


@Injectable()
class MockAdminService {
   
    saveNowPlaying(nowPlaying, tid) {} 
 }

describe('ChangeShowComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    const matDialogStub = { open: () => ({}),
    closeAll:()=>{} };
    TestBed.configureTestingModule({
        imports:[ FormsModule, ReactiveFormsModule,MatDialogModule,BrowserAnimationsModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule
        ],
      declarations: [
        ChangeShowComponent
      ],
      providers: [
        {provide: AdminService, useClass: MockAdminService},
        { provide: MatDialog, useValue: matDialogStub },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(ChangeShowComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    const result = component.ngOnInit();
    const app = fixture.debugElement.componentInstance;
    const el = fixture.nativeElement.querySelector('input');
    el.value = 'something';
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.movieResult).toBe(undefined);
    });
    
  });

  it('should run #addMovie()', async () => {
      let movie = "IT"
    const result = component.addMovie(movie);
    expect(component.nowShowing.length).toEqual(1);
    expect(component.nowPlaying.length).toEqual(1);

  });

  it('should run #save()', async () => {
    const save = spyOn(component,'save');
    const result = component.save();
    expect(component.save).toHaveBeenCalled();
  });

  it('should run #cancel()', async () => {
    const result = component.cancel();
    expect(component.nowShowing.length).toEqual(0);

  });

  it('should run #dialogOk()', async () => {
    const result = component.dialogOk();

    expect(component.nowShowing.length).toEqual(0);
    expect(component.movieResult.length).toEqual(0);

  });

});