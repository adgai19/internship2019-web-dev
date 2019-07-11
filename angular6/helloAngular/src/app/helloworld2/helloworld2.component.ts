import { Component, OnInit } from '@angular/core';
import {User} from './user.model';
@Component({
  selector: 'app-helloworld2',
  templateUrl: './helloworld2.component.html',
  styleUrls: ['./helloworld2.component.sass']
})
export class Helloworld2Component implements OnInit {
  user:User;
  constructor() {
    this.user=new User("adgai","gai","23698547");
   }
  
  ngOnInit() {
  }
  dispUserInfo(){
    return this.user.getName()+" "+this.user.getNo();
  }
}
