import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTravelALittleMoreComponent } from './to-travel-alittle-more.component';

describe('ToTravelALittleMoreComponent', () => {
  let component: ToTravelALittleMoreComponent;
  let fixture: ComponentFixture<ToTravelALittleMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToTravelALittleMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToTravelALittleMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
