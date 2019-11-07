import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servi01Component } from './servi01.component';

describe('Servi01Component', () => {
  let component: Servi01Component;
  let fixture: ComponentFixture<Servi01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servi01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servi01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
