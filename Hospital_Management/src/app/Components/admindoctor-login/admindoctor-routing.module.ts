import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindoctorLoginComponent } from './admindoctor-login.component';
import { DoctorsignupComponent } from '../doctorsignup/doctorsignup.component';
import { AdmindoctordashboardComponent } from '../admindoctordashboard/admindoctordashboard.component';
import { adminauthGuard } from 'src/app/Guards/adminauth.guard';

const routes: Routes = [
  {path:'admin',component:AdmindoctorLoginComponent},
  {path:'doctor',component:AdmindoctorLoginComponent},
  {path:'doctorsignup',component:DoctorsignupComponent},
  {path:'admindoctordashboard',component:AdmindoctordashboardComponent,canActivate:[adminauthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdmindoctorRoutingModule { }
