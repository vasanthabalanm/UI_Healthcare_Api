import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  // private baseUrl: string = 'https://localhost:7254/api/Admin';
  constructor(private http: HttpClient) {}

  getpatienr() {
    return this.http.get<any>(`https://localhost:7254/api/Admin/allpatients`);
  }
  public getpendingdoctor(): Observable<any> {
    return this.http.get(`https://localhost:7254/api/Admin/pendingdoctors`)
  }

  public addtoapprovedoctor(doctors: any): Observable<any> {
    return this.http.post(`https://localhost:7254/api/Admin/doctor_Approved`, doctors);
  }

  public deletependingdoctorid(id: number): Observable<any> {
    return this.http.delete(`https://localhost:7254/api/Admin/delete_Pending_doctor/${id}`);
  }

  public getapprovedoctor(): Observable<any> {
    return this.http.get(`https://localhost:7254/api/Admin/GetRolesOfDoctors`)
  }

 
  public deleteapprovedoctorid(id: number): Observable<any> {
    return this.http.delete(`https://localhost:7254/api/Admin/delete_approved_Doctor/${id}`);
  }
}
