import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10Page } from './top10.page';

describe('Top10Page', () => {
  let component: Top10Page;
  let fixture: ComponentFixture<Top10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
