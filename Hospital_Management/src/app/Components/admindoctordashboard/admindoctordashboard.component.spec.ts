import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindoctordashboardComponent } from './admindoctordashboard.component';

describe('AdmindoctordashboardComponent', () => {
  let component: AdmindoctordashboardComponent;
  let fixture: ComponentFixture<AdmindoctordashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindoctordashboardComponent]
    });
    fixture = TestBed.createComponent(AdmindoctordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
