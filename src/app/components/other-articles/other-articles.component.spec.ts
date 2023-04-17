import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherArticlesComponent } from './other-articles.component';

describe('OtherArticlesComponent', () => {
  let component: OtherArticlesComponent;
  let fixture: ComponentFixture<OtherArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
