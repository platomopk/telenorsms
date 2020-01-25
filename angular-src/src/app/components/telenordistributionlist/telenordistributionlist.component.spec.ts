/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelenordistributionlistComponent } from './telenordistributionlist.component';

describe('TelenordistributionlistComponent', () => {
  let component: TelenordistributionlistComponent;
  let fixture: ComponentFixture<TelenordistributionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelenordistributionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelenordistributionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
