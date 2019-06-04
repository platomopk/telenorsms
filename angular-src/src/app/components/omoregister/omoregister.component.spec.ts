/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OmoregisterComponent } from './omoregister.component';

describe('OmoregisterComponent', () => {
  let component: OmoregisterComponent;
  let fixture: ComponentFixture<OmoregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmoregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmoregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
