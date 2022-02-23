import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectComp4Component } from './subject-comp4.component';

describe('SubjectComp4Component', () => {
  let component: SubjectComp4Component;
  let fixture: ComponentFixture<SubjectComp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectComp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectComp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
