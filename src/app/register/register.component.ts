import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

interface ContactInterface {
  Fullname: string;
  Username: string;
  Address: string; 
  Email: string;
  Phone: string;
  Password: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  IsLogin:Boolean;
}
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor (public route : Router){}
  public fullname: string = '';
  public username: string = '';
  public address: string = '';
  public email: string = '';
  public phone: string = '';
  public password: string = '';
  public isLogin: boolean = false;
  public contactArray: ContactInterface[] = [];
  public created_at: Date = new Date();
  public updated_at: Date = new Date();
  public message = false;
  public islogin = false;

  ngOnInit() {
    const contactDetails = localStorage["customerDetails"];
    if (contactDetails) {
        this.contactArray = JSON.parse(contactDetails) as ContactInterface[];
    } else {
        this.contactArray = [];
    }
}
addDetails() {
  let CheckEmail = this.contactArray.find((each:any)=>each.Email == this.email);
  if (CheckEmail) {
    this.message = true
  } else {
    const uniqueId = uuidv4();
    const contactObject = {
      Fullname: this.fullname,
      Username: this.username,
      Address: this.address,
      Email: this.email,
      Phone: this.phone,
      IsLogin:this.isLogin,
      Password: this.password,
      UniqueId: uniqueId,
      CreatedAt: this.created_at,
      UpdatedAt: this.updated_at,
  };
    this.contactArray.push(contactObject);
    localStorage.setItem("isLogin",JSON.stringify(this.islogin))
    localStorage.setItem("customerDetails", JSON.stringify(this.contactArray));
    this.route.navigate(['login'])
  }
}

}