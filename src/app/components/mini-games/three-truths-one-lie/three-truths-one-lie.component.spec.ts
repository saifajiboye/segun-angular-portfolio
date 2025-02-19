import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeTruthsOneLieComponent } from './three-truths-one-lie.component';

describe('ThreeTruthsOneLieComponent', () => {
  let component: ThreeTruthsOneLieComponent;
  let fixture: ComponentFixture<ThreeTruthsOneLieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeTruthsOneLieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeTruthsOneLieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
