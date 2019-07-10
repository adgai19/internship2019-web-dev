import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Helloworld2Component } from './helloworld2.component';

describe('Helloworld2Component', () => {
  let component: Helloworld2Component;
  let fixture: ComponentFixture<Helloworld2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Helloworld2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Helloworld2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
