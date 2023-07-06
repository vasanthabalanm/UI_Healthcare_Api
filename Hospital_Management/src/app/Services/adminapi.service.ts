import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

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

  getappointdetail(username: string, email: string) {
    const queryParams = `?doctorName=${username}&doctorEmail=${email}`;
    return this.http.get(`https://localhost:7254/api/Admin/appointments_Doctors${queryParams}`);
    
  }



  public updatedoctor(id: number, custs: any) {
    return this.http.put(`https://localhost:7254/api/Admin/Doctorareupdate/`+id,custs);
  }
  
}
