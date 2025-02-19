import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathTimerComponent } from './math-timer.component';

describe('MathTimerComponent', () => {
  let component: MathTimerComponent;
  let fixture: ComponentFixture<MathTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathTimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
