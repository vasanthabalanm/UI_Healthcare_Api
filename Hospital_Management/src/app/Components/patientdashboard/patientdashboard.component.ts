import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { PatientstoreService } from 'src/app/Services/patientstore.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent implements OnInit {

  public users:any = [];
  public role!:string;
   Specialization!: string;
   Doctors!:any[];
   public added:any[]=[];
   public Appointmentform!:FormGroup;


  public fullName : string = "";
  constructor(private api : ApiService, private auth: AuthService, private userStore: PatientstoreService,private http: HttpClient,private formbuilder : FormBuilder,private toast:NgToastService,private router :Router) { }

  ngOnInit() : void {
    // this.api.getUsers()
    // .subscribe(res=>{
    // this.Doctors = res;
    // });
    this.starttemplate();

    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      const fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = val || fullNameFromToken
    });

    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
    })

  }

  search(): void {
    this.special(this.Specialization)
      .subscribe((response: any[]) => {
        this.Doctors = response;

      });
  }
  logout(){
    this.auth.signOut();
  }
  special(Specialization: string): Observable<any> {
    return this.http.get(`https://localhost:7254/api/Appointment/filter?Specialization=${Specialization}`);
 
  }

  addapoint():void{
    this.api.AddAppointments(this.Appointmentform.value).subscribe(res=>{
      this.toast.success({detail:"Appointment added", summary:res.message, duration: 2000});
    })
  }
  

  private starttemplate():void{
    this.Appointmentform = this.formbuilder.group({
      doctorId: [],
      phone:[],
      location: [],
      gender: []
     });
  }

}
