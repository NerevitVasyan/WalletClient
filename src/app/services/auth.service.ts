import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from '../models/registerDto';
import { LoginDto } from '../models/loginDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  baseURL = "https://localhost:44342/api/";

  constructor(private http: HttpClient) { }

  register(user: RegisterDto): Observable<any> {
    return this.http.post(this.baseURL + "Account/register", user);
  }

  login(user: LoginDto): Observable<any> {
    return this.http.post(this.baseURL + "Account/login", user);
  }

  isLoggedIn(): boolean {
    return (localStorage.getItem("userId")!=null)
  }

  logOut(){
    localStorage.removeItem("userId");
  }

}
