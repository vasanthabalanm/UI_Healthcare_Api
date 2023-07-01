import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindoctorLoginComponent } from './admindoctor-login.component';

const routes: Routes = [
  {path:'admin',component:AdmindoctorLoginComponent},
  {path:'doctor',component:AdmindoctorLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdmindoctorRoutingModule { }
