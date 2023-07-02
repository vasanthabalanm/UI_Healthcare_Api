import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientHomeComponent } from './Components/patient-home/patient-home.component';
import { PatientdashboardComponent } from './Components/patientdashboard/patientdashboard.component';
import { PatientloginComponent } from './Components/patientlogin/patientlogin.component';
import { PatientsignupComponent } from './Components/patientsignup/patientsignup.component';
import { authguard } from './Guards/auth.guard';

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
export class AppRoutingModule { }
