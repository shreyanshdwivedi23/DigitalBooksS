import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [];

@NgModule({
  imports: [  RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
