import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonPage } from './london.page';

describe('LondonPage', () => {
  let component: LondonPage;
  let fixture: ComponentFixture<LondonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LondonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
