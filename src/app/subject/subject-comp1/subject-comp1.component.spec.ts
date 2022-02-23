import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectComp1Component } from './subject-comp1.component';

describe('SubjectComp1Component', () => {
  let component: SubjectComp1Component;
  let fixture: ComponentFixture<SubjectComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectComp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
