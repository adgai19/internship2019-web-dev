import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-helloworld2',
  templateUrl: './helloworld2.component.html',
  styleUrls: ['./helloworld2.component.sass']
})
export class Helloworld2Component implements OnInit {
  user: User;
  constructor() {
    this.user = new User("Adgai", "Gai", ["23698547", "3652215782", "1258746935"], "Panaji");
  }

  ngOnInit() {
  }
  dispName() {
    return this.user.getName();
  }
  /* dispUserPhone() {
    return this.user.getNo();
  } */
  dispAddress() {
    return this.user.getAddress();
  }
}
