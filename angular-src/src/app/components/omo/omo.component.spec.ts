/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OmoComponent } from './omo.component';

describe('OmoComponent', () => {
  let component: OmoComponent;
  let fixture: ComponentFixture<OmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
