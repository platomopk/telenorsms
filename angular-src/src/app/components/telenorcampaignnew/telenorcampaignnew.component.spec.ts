/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelenorcampaignnewComponent } from './telenorcampaignnew.component';

describe('TelenorcampaignnewComponent', () => {
  let component: TelenorcampaignnewComponent;
  let fixture: ComponentFixture<TelenorcampaignnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelenorcampaignnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelenorcampaignnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
