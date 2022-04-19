import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComp2Component } from './practice-comp2.component';

describe('PracticeComp2Component', () => {
  let component: PracticeComp2Component;
  let fixture: ComponentFixture<PracticeComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeComp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
