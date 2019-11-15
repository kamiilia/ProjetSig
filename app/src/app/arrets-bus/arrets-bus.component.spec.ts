import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArretsBusComponent } from './arrets-bus.component';

describe('ArretsBusComponent', () => {
  let component: ArretsBusComponent;
  let fixture: ComponentFixture<ArretsBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArretsBusComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArretsBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
