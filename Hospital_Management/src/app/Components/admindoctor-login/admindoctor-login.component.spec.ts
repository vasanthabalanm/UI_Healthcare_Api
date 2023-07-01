import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindoctorLoginComponent } from './admindoctor-login.component';

describe('AdmindoctorLoginComponent', () => {
  let component: AdmindoctorLoginComponent;
  let fixture: ComponentFixture<AdmindoctorLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindoctorLoginComponent]
    });
    fixture = TestBed.createComponent(AdmindoctorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
