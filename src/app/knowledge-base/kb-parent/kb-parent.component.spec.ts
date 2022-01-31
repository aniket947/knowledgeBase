import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbParentComponent } from './kb-parent.component';

describe('KbParentComponent', () => {
  let component: KbParentComponent;
  let fixture: ComponentFixture<KbParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
