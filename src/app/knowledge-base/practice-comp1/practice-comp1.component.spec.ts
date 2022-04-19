import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComp1Component } from './practice-comp1.component';

describe('PracticeComp1Component', () => {
  let component: PracticeComp1Component;
  let fixture: ComponentFixture<PracticeComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeComp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
