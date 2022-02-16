import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentCompComponent } from './ng-content-comp.component';

describe('NgContentCompComponent', () => {
  let component: NgContentCompComponent;
  let fixture: ComponentFixture<NgContentCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
