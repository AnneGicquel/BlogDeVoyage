import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAndSummaryComponent } from './travel-and-summary.component';

describe('TravelAndSummaryComponent', () => {
  let component: TravelAndSummaryComponent;
  let fixture: ComponentFixture<TravelAndSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelAndSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelAndSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
