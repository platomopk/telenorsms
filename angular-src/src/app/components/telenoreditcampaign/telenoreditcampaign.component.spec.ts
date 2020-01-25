/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelenoreditcampaignComponent } from './telenoreditcampaign.component';

describe('TelenoreditcampaignComponent', () => {
  let component: TelenoreditcampaignComponent;
  let fixture: ComponentFixture<TelenoreditcampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelenoreditcampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelenoreditcampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
