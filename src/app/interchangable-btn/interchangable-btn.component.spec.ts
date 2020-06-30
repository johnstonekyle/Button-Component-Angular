import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterchangableBtnComponent } from './interchangable-btn.component';

describe('InterchangableBtnComponent', () => {
  let component: InterchangableBtnComponent;
  let fixture: ComponentFixture<InterchangableBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterchangableBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterchangableBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
