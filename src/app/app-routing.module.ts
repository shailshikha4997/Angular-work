import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import {AuthoGuard } from './authentication/autho.guard'
import { EmployeeRegistrationComponent } from './components/pages/employee-registration/employee-registration.component';
import { OrderMenuComponent } from './components/pages/order-menu/order-menu.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'employee-registration',component:EmployeeRegistrationComponent},
    {path:'order-menu',component:OrderMenuComponent}
  ]
},
  {path:'login',component:LoginComponent},
 // {path:'dashboard',component:DashboardComponent, canActivate:[AuthoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
