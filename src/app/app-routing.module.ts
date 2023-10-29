import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { taskGuard } from './guards/task.guard';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'dashboard/addtask', component:AddtaskComponent},


  {path: 'addtask', component:AddtaskComponent, canActivate:[taskGuard]},

  {path: "**", component:ErrorpageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
