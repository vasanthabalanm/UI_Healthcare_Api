import { Component, OnInit } from '@angular/core';
import { AdminapiService } from 'src/app/Services/adminapi.service';
import { AdminauthService } from 'src/app/Services/adminauth.service';
import { AdminstoreService } from 'src/app/Services/adminstore.service';

@Component({
  selector: 'app-admindoctordashboard',
  templateUrl: './admindoctordashboard.component.html',
  styleUrls: ['./admindoctordashboard.component.css']
})
export class AdmindoctordashboardComponent implements OnInit {

  public users:any = [];
  public role!:string;

  public fullName : string = "";
  constructor(private api : AdminapiService, private auth: AdminauthService, private userStore: AdminstoreService) { }

  ngOnInit() {
    this.api.getUsers()
    .subscribe(res=>{
    this.users = res;
    });

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

  logout(){
    this.auth.signOut();
  }

}