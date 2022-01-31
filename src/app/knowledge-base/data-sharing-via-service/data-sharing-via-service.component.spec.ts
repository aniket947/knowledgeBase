import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingViaServiceComponent } from './data-sharing-via-service.component';

describe('DataSharingViaServiceComponent', () => {
  let component: DataSharingViaServiceComponent;
  let fixture: ComponentFixture<DataSharingViaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSharingViaServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSharingViaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
