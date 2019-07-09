"use strict";
exports.__esModule = true;
var address_1 = require("./address");
var enum_1 = require("./enum");
var student = /** @class */ (function () {
    function student(fname, lname, rollno, saddress) {
        this.fname = fname;
        this.lname = lname;
        this.rollno = rollno;
        this.saddress = saddress;
        // this.sgrades = Grade.F;
    }
    student.prototype.getFirstName = function () {
        return this.fname;
    };
    student.prototype.getLastName = function () {
        return this.lname;
    };
    student.prototype.getRollNo = function () {
        return this.rollno;
    };
    student.prototype.setFirstName = function (fname) {
        this.fname = fname;
    };
    student.prototype.setLantName = function (lname) {
        this.lname = lname;
    };
    student.prototype.fullname = function () {
        console.log(this.fname + ' ' + this.lname);
    };
    student.prototype.percent = function () {
        var i, temp = 0;
        for (i = 0; i < this.marks.length; i++) {
            temp += this.marks[i];
        }
        temp /= this.marks.length;
        return temp;
    };
    student.prototype.grade = function () {
        var percentage = this.percent();
        if (percentage > 90) {
            this.sgrades = enum_1.Grade.A;
        }
        else if (percentage > 80) {
            this.sgrades = enum_1.Grade.B;
        }
        else if (percentage > 80) {
            this.sgrades = enum_1.Grade.B;
        }
        else if (percentage > 70) {
            this.sgrades = enum_1.Grade.C;
        }
        else if (percentage > 60) {
            this.sgrades = enum_1.Grade.D;
        }
        else if (percentage > 50) {
            this.sgrades = enum_1.Grade.E;
        }
        else {
            this, this.sgrades = enum_1.Grade.F;
        }
    };
    student.prototype.advice = function () {
        if (this.sgrades == enum_1.Grade.A) {
            console.log("message = good job1");
        }
        if (this.sgrades == enum_1.Grade.B) {
            console.log("message = good job2");
        }
        if (this.sgrades == enum_1.Grade.C) {
            console.log("message = good job3");
        }
        if (this.sgrades == enum_1.Grade.D) {
            console.log("message = good job4");
        }
        if (this.sgrades == enum_1.Grade.E) {
            console.log("message = good job5");
        }
        if (this.sgrades == enum_1.Grade.F) {
            console.log("message = good job6");
        }
    };
    return student;
}());
var addresstemp = new address_1.Address("Goa", "India");
var student1 = new student("john", "doe", 112358, addresstemp);
student1.fullname();
student1.marks = [95, 93, 96, 98, 94, 75];
// console.log(student1);
console.log("percentage=" + student1.percent());
student1.grade();
console.log(student1);
student1.advice();
