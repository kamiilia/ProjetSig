import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TramPage } from './tram.page';

describe('TramPage', () => {
  let component: TramPage;
  let fixture: ComponentFixture<TramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
