import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AdminapiService } from 'src/app/Services/adminapi.service';
import { AdminauthService } from 'src/app/Services/adminauth.service';
import { AdminstoreService } from 'src/app/Services/adminstore.service';

@Component({
  selector: 'app-admindoctordashboard',
  templateUrl: './admindoctordashboard.component.html',
  styleUrls: ['./admindoctordashboard.component.css']
})
export class AdmindoctordashboardComponent implements OnInit {

  public users: any = [];
  public role!: string;

  // public pendingform!:FormGroup;
  public pendingdtr: any[] = [];

  public approveddoctor: any[] = [];

  public fullName: string = "";
  constructor(private api: AdminapiService, private auth: AdminauthService, private userStore: AdminstoreService, private toast:NgToastService
    ) { }

  ngOnInit() {

    this.showpendingdoctor();
    this.approvingdoctors();
    this.api.getpatienr()
      .subscribe(res => {
        this.users = res;
      });

    this.userStore.getFullNameFromStore()
      .subscribe(val => {
        const fullNameFromToken = this.auth.getfullNameFromToken();
        this.fullName = val || fullNameFromToken
      });

    this.userStore.getRoleFromStore()
      .subscribe(val => {
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = val || roleFromToken;
      })
  }

  logout() {
    this.auth.signOut();
  }

  public showpendingdoctor(): void {
    this.api.getpendingdoctor().subscribe(result =>
      this.pendingdtr = result)
  }
  public approvingdoctors(): void {
    this.api.getapprovedoctor().subscribe(result =>
      this.approveddoctor = result)
  }

    id!:number;
    
  public addpendoctor(item:any)
  {
    console.log(item);
    const {id, ...item1} = item;
    this.api.addtoapprovedoctor(item1).subscribe(res=>{
      this.toast.success({detail:"Doctor Apporoved", summary:res.message, duration: 3000});
      window.location.reload();
    })    
    this.api.deletependingdoctorid(item.id).subscribe(res1=>{
      console.log("approved and deleted!");
    });
  }

  public deletependoctor(item:any){
    this.api.deletependingdoctorid(item.id).subscribe(res=>{
      this.toast.warning({detail:"Doctor Declined",summary:res.message,duration:3000});
      window.location.reload();
    })
  }

  public deleteapproveddoctor(item:any){
    this.api.deleteapprovedoctorid(item.id).subscribe((res)=>{alert("Apporved doctor deleted");},(error)=>{alert("error in Apporved doctor delete");})

  }

}