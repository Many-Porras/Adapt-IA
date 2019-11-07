import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servi02Component } from './servi02.component';

describe('Servi02Component', () => {
  let component: Servi02Component;
  let fixture: ComponentFixture<Servi02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servi02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servi02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
