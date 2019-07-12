import { Component } from '@angular/core';
import { from } from 'rxjs';
import { User } from './helloworld2/user.model';
@Component({//defines metadata and properties of the module
  selector: 'Myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'helloAngular';
  
  user:User;
  user2:User;
  constructor(){
     }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.user = new User("Aditya", "Gai", ["23698547", "3652215782", "1258746935"], "Panaji");
    this.user2=new User("adg","gai",[],"goa");
 

  }
  
}
