import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientHomeComponent } from './patient-home.component';
import { PatientloginComponent } from '../patientlogin/patientlogin.component';
import { PatientsignupComponent } from '../patientsignup/patientsignup.component';
import { PatientdashboardComponent } from '../patientdashboard/patientdashboard.component';

const routes: Routes = [
  {path:'',component:PatientHomeComponent},
  {path:'patientlogin',component:PatientloginComponent},
  {path:'patientsignup',component:PatientsignupComponent},
  {path:'Patientdashboard',component:PatientdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
