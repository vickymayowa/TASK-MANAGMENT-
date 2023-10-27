import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor (public route : Router){}
  ngOnInit(){
    let Islogin = JSON.parse(localStorage["isLogin"])
    console.log(Islogin);
    if (Islogin == true) {
      console.log("Authtorized User")
    } else {
      console.log("UnAuthtorized User")
      this.route.navigate(['login'])
    }
  }
}
