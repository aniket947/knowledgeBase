import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectComp3Component } from './subject-comp3.component';

describe('SubjectComp3Component', () => {
  let component: SubjectComp3Component;
  let fixture: ComponentFixture<SubjectComp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectComp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
