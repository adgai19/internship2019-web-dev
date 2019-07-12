import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-helloworld2',
  templateUrl: './helloworld2.component.html',
  styleUrls: ['./helloworld2.component.sass']
})
export class Helloworld2Component implements OnInit {
  @Input() user: User;
  // Name:string;
  
  constructor() {
    // this.Name=this.name;
    console.log("hello");

  }
  ngOnInit() {//lifecycle hook
    //gets called when all values are assigned
    //attributes are distributed in this function
    console.log(this.user);
    //this.user = new User(this.name, "Gai", ["23698547", "3652215782", "1258746935"], "Panaji");


  }
   dispName() {
     return this.user.getName();
   }
  //  dispUserPhone() {
  //    return this.user.getNo();
  //  } 
   dispAddress() {
     return this.user.getAddress();
   }
}
