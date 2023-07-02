import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://localhost:7254/api/Admin/Approved';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }

  AddAppointments(Appointment: any): Observable<any> {
    return this.http.post(`https://localhost:7254/api/Appointment`, Appointment);
  }
}
