import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { NgToastService } from "ng-angular-popup";
import { AdminauthService } from "../Services/adminauth.service";

@Injectable({
  providedIn: 'root'
})
export class adminauthGuard implements CanActivate {
  constructor(private auth : AdminauthService, private router: Router, private toast: NgToastService){

  }
  canActivate():boolean{
    if(this.auth.isLoggedIn()){
      return true
    }else{
      this.toast.error({detail:"ERROR", summary:"Please Login First!"});
      this.router.navigate(['login'])
      return false;
    }
  }

}

