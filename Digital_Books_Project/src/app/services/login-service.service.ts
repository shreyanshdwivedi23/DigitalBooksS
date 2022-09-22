import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  _loginUrl="https://localhost:44396/api/login/login-user";
  
  constructor(private http:HttpClient, private _router:Router) { }

  loginUser(login:any){
    return this.http.post<any>(this._loginUrl,login);
  }
  logginIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('userFullname');
    localStorage.removeItem('userType');
    this._router.navigate(['']);
  }


  getToken(){
    return localStorage.getItem('token');
  }
}
