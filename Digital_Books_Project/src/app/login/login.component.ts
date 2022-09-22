import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserData } from '../models/userdata';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // loginModel={
  //   userName:String,
  //   userPassword:String,
  //   userEmail:String
  // }

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  constructor(private _service:LoginServiceService,private _router:Router) { }
  ErrorMessage:any='';
  UserDataModel:UserData=new UserData();
  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUser(this.UserDataModel).subscribe(res=>{
     
      localStorage.setItem('token',res.token);
      console.log(res.user);
      localStorage.setItem('userType',res.user.userType);
      localStorage.setItem('userFullname',res.user.userFullname);
      this._router.navigate(['home']);
    },res=>
    {
      console.log(res);
      this.ErrorMessage="Some error have occured";
      document.getElementById('btnErrorMsg')?.click();
    });
  }

}
