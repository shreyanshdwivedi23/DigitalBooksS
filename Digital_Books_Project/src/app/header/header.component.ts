import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _auth:LoginServiceService) { }

  ngOnInit(): void {
  }

  LoggedIn(Input:boolean):boolean{
    if(Input){
      return this._auth.logginIn();
    }
    else{
      return !this._auth.logginIn();
    }
  }
  Logout(){
    this._auth.logoutUser();
    
  }
  userType = localStorage.getItem('userType');
  userFullname = localStorage.getItem('userFullname');
  

}
