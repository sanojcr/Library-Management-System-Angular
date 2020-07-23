import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdmin } from '../adminmodule/admins';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  private urlAdmin: string = "http://localhost:5001/admins";

  constructor(private http: HttpClient) { }
  getAdmins(): Observable<IAdmin[]> {
    return this.http.get<IAdmin[]>(this.urlAdmin);
  }

  getAdmin(id: number): Observable<IAdmin> {
    return this.http.get<IAdmin>(this.urlAdmin + '/' + id);
  }

}
