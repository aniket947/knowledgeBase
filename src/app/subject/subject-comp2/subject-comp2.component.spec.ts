import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectComp2Component } from './subject-comp2.component';

describe('SubjectComp2Component', () => {
  let component: SubjectComp2Component;
  let fixture: ComponentFixture<SubjectComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectComp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
