import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownForMaintenanceComponent } from './down-for-maintenance.component';

describe('DownForMaintenanceComponent', () => {
  let component: DownForMaintenanceComponent;
  let fixture: ComponentFixture<DownForMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownForMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownForMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
