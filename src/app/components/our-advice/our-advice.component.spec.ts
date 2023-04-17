import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAdviceComponent } from './our-advice.component';

describe('OurAdviceComponent', () => {
  let component: OurAdviceComponent;
  let fixture: ComponentFixture<OurAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
