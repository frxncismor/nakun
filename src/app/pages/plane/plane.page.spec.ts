import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanePage } from './plane.page';

describe('PlanePage', () => {
  let component: PlanePage;
  let fixture: ComponentFixture<PlanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
