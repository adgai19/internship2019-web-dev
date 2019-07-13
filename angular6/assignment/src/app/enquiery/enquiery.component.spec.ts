import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquieryComponent } from './enquiery.component';

describe('EnquieryComponent', () => {
  let component: EnquieryComponent;
  let fixture: ComponentFixture<EnquieryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquieryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquieryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
