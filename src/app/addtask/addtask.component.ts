import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
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
