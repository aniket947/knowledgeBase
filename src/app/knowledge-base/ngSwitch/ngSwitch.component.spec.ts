import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjectArrayComponent } from '../object-array/object-array.component';


describe('ObjectArrayComponent', () => {
  let component: ObjectArrayComponent;
  let fixture: ComponentFixture<ObjectArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
