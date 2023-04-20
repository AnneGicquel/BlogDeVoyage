import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverArticleComponent } from './cover-article.component';

describe('CoverArticleComponent', () => {
  let component: CoverArticleComponent;
  let fixture: ComponentFixture<CoverArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
