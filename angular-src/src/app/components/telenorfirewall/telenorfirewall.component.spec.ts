/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelenorfirewallComponent } from './telenorfirewall.component';

describe('TelenorfirewallComponent', () => {
  let component: TelenorfirewallComponent;
  let fixture: ComponentFixture<TelenorfirewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelenorfirewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelenorfirewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
