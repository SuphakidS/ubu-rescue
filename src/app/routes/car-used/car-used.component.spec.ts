/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarUsedComponent } from './car-used.component';

describe('CarUsedComponent', () => {
  let component: CarUsedComponent;
  let fixture: ComponentFixture<CarUsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarUsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
