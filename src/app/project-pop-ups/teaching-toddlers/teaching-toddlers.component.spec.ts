import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingToddlersComponent } from './teaching-toddlers.component';

describe('TeachingToddlersComponent', () => {
  let component: TeachingToddlersComponent;
  let fixture: ComponentFixture<TeachingToddlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingToddlersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingToddlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
