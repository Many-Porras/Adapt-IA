import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servi03Component } from './servi03.component';

describe('Servi03Component', () => {
  let component: Servi03Component;
  let fixture: ComponentFixture<Servi03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servi03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servi03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
