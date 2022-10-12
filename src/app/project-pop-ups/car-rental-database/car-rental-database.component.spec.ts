import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalDatabaseComponent } from './car-rental-database.component';

describe('CarRentalDatabaseComponent', () => {
  let component: CarRentalDatabaseComponent;
  let fixture: ComponentFixture<CarRentalDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRentalDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
