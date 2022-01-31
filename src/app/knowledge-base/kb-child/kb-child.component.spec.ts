import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbChildComponent } from './kb-child.component';

describe('KbChildComponent', () => {
  let component: KbChildComponent;
  let fixture: ComponentFixture<KbChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
