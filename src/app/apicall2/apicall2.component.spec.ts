import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apicall2Component } from './apicall2.component';

describe('Apicall2Component', () => {
  let component: Apicall2Component;
  let fixture: ComponentFixture<Apicall2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apicall2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apicall2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
