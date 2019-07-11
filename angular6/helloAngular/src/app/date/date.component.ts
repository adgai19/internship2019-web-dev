import { Component, OnInit } from '@angular/core';
//let  moment = require('moment');
import { async } from '@angular/core/testing';
import { from } from 'rxjs';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.sass']
})
export class DateComponent implements OnInit {
  date = new Date();
  date2=new mydate();
  clock:string;
  constructor() {
    setInterval(() => {
      // this.clock = moment().format('MMMM Do YYYY, h:mm:ss a');
      let currentDate=new Date();
      this.date=currentDate;
  }, 1000) // Updates the time every second.
   }

  ngOnInit() {
  }
  dispDate(): string {

    console.log(this.date.toJSON());
    return this.date.toTimeString();
  }
  dispdate2(){
    return this.dispDate();
  }
}
export class mydate implements OnInit {
  date = new Date();
  constructor() {
    
   }
  ngOnInit() {
    setTimeout(()=>{},1000);
    this.ngOnInit();

  }
  dispDate(): string {

    console.log(this.date.toJSON());
    
    return this.date.toTimeString();
  }

}