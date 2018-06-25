import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsCalComponent } from './js-cal.component';

describe('JsCalComponent', () => {
  let component: JsCalComponent;
  let fixture: ComponentFixture<JsCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
