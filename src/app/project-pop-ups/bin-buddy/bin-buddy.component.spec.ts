import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinBuddyComponent } from './bin-buddy.component';

describe('BinBuddyComponent', () => {
  let component: BinBuddyComponent;
  let fixture: ComponentFixture<BinBuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinBuddyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
