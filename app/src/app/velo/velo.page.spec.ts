import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeloPage } from './velo.page';

describe('VeloPage', () => {
  let component: VeloPage;
  let fixture: ComponentFixture<VeloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
