import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFlipkartComponent } from './css-flipkart.component';

describe('CssFlipkartComponent', () => {
  let component: CssFlipkartComponent;
  let fixture: ComponentFixture<CssFlipkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssFlipkartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssFlipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
