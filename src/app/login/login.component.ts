import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (public route : Router){}
  public username = '';
  public password = '';
  public contactArray = []
  public updated_at: Date = new Date();

  ngOnInit(){
    let contactDetails:any = localStorage.getItem("customerDetails");
    console.log(contactDetails);
    
    contactDetails = JSON.parse(contactDetails);
    console.log(contactDetails);
    
    if (contactDetails) {
        this.contactArray = contactDetails
    } else {
        this.contactArray = [];
    }
  }
  login(){
    // let FindUser = this.contactArray.find((each:any)=>each.username == this.username && each.password == this.password)
    // console.log(FindUser);
    console.log(this.username , this.password)
  }
}
