/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelenorhrComponent } from './telenorhr.component';

describe('TelenorhrComponent', () => {
  let component: TelenorhrComponent;
  let fixture: ComponentFixture<TelenorhrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelenorhrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelenorhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
