import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RservationsComponent } from './rservations.component';

describe('RservationsComponent', () => {
  let component: RservationsComponent;
  let fixture: ComponentFixture<RservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
