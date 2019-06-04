/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OmologinComponent } from './omologin.component';

describe('OmologinComponent', () => {
  let component: OmologinComponent;
  let fixture: ComponentFixture<OmologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
