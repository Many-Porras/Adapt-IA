import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servi05Component } from './servi05.component';

describe('Servi05Component', () => {
  let component: Servi05Component;
  let fixture: ComponentFixture<Servi05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servi05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servi05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
