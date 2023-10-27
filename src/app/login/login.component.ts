import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ContactInterface {
  Username: string;
  Password: string;
  IsLogin:Boolean;
  UpdatedAt: Date;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (public route : Router){}
  public username: string = '';
  public password: string = '';
  public islogin = true;
  public contactArray: ContactInterface[] = [];
  public updated_at: Date = new Date();

    ngOnInit() {
      this.contactArray = JSON.parse(localStorage["customerDetails"]) || [];
      console.log(this.contactArray)
      const loggedInUser = this.contactArray.find(
        (contact) => contact.Username === this.username && contact.Password === this.password
      );
    
      if (loggedInUser) {
        this.islogin = true;
        localStorage.setItem("isLogin", JSON.stringify(true)); // Set isLogin to true in local storage
        localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
        this.route.navigate(['dashboard']);
      } else {
        this.islogin = false;
        localStorage.setItem("isLogin", JSON.stringify(false)); // Set isLogin to false in local storage
      }
    }

}
