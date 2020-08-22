import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPage } from './material.page';

describe('MaterialPage', () => {
  let component: MaterialPage;
  let fixture: ComponentFixture<MaterialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
