import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servi04Component } from './servi04.component';

describe('Servi04Component', () => {
  let component: Servi04Component;
  let fixture: ComponentFixture<Servi04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servi04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servi04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
