import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientHomeComponent } from './patient-home.component';
import { PatientloginComponent } from '../patientlogin/patientlogin.component';
import { PatientsignupComponent } from '../patientsignup/patientsignup.component';
import { PatientdashboardComponent } from '../patientdashboard/patientdashboard.component';
import { authguard } from 'src/app/Guards/auth.guard';

const routes: Routes = [
  {path:'',component:PatientHomeComponent},
  {path:'patientlogin',component:PatientloginComponent},
  {path:'patientsignup',component:PatientsignupComponent},
  {path:'patientdashboard',component:PatientdashboardComponent,canActivate:[authguard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
