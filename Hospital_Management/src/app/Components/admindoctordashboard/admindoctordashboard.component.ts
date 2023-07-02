import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private api: AdminapiService, private auth: AdminauthService, private userStore: AdminstoreService, private formbuilder: FormBuilder) { }

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

  selectedDoctor: any; // Variable to store the selected doctor

  // addpendoctor(): void {
  //   if (this.selectedDoctor) {
  //     this.api.addtoapprovedoctor(this.selectedDoctor).subscribe(
  //       (response: any) => {
  //         console.log('Doctor added successfully:', response);
  //         this.pendingdtr.push(this.selectedDoctor);
  //       },
  //       (error: any) => {
  //         console.error('Failed to add doctor:', error);
  //       }
  //     );
  //   }
  // }

  // deletependoctor(): void {
  //   if (this.selectedDoctor) {
  //     this.api.deletependingdoctorid(this.selectedDoctor.id).subscribe(
  //       (response: any) => {
  //         console.log('Doctor deleted successfully:', response);
  //         this.pendingdtr = this.pendingdtr.filter((doctor) => doctor.id !== this.selectedDoctor.id);
  //       },
  //       (error: any) => {
  //         console.error('Failed to delete doctor:', error);
  //       }
  //     );
  //   }
  // }



  // public addpendoctor(doctor:any):void{
  //   this.api.addtoapprovedoctor(doctor).subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //       alert("added successfully");
  //     }
  //   })
  // }



  // private showpendingdoctor():void{
  //   this.pendingform = this.formbuilder.group({
  //     hotelId: [],
  //     hotelName: [],
  //     hotelDescription:[],
  //     hotelRoomPrice: [],
  //     hotelRoomsAvailable: [],
  //     hotelLocation: []
  //    });
  // }

}