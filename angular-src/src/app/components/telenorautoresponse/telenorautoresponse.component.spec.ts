/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelenorautoresponseComponent } from './telenorautoresponse.component';

describe('TelenorautoresponseComponent', () => {
  let component: TelenorautoresponseComponent;
  let fixture: ComponentFixture<TelenorautoresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelenorautoresponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelenorautoresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
