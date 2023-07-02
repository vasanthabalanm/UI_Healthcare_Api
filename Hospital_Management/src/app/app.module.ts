import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientHomeComponent } from './Components/patient-home/patient-home.component';
import { PatientloginComponent } from './Components/patientlogin/patientlogin.component';
import { PatientsignupComponent } from './Components/patientsignup/patientsignup.component';
import { PatientdashboardComponent } from './Components/patientdashboard/patientdashboard.component';
import { AdmindoctorLoginComponent } from './Components/admindoctor-login/admindoctor-login.component';
import { DoctorsignupComponent } from './Components/doctorsignup/doctorsignup.component';
import { AdmindoctordashboardComponent } from './Components/admindoctordashboard/admindoctordashboard.component';
import {PatientRoutingModule} from '../app/Components/patient-home/patient-routing.module'
import {AdmindoctorRoutingModule} from '../app/Components/admindoctor-login/admindoctor-routing.module'
import { NgToastModule } from 'ng-angular-popup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Interceptor/token.interceptor';
import { AdmintokenInterceptor } from './Interceptor/admintoken.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PatientHomeComponent,
    PatientloginComponent,
    PatientsignupComponent,
    PatientdashboardComponent,
    AdmindoctorLoginComponent,
    DoctorsignupComponent,
    AdmindoctordashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatientRoutingModule,
    AdmindoctorRoutingModule,
    NgToastModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AdmintokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
