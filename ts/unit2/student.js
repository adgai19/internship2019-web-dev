"use strict";
exports.__esModule = true;
var address_1 = require("./address");
var enum_1 = require("./enum");
var student = /** @class */ (function () {
    function student(fname, lname, rollno, saddress, sgrades) {
        this.fname = fname;
        this.lname = lname;
        this.rollno = rollno;
        this.saddress = saddress;
        this.sgrades = sgrades;
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
    student.prototype.advice = function () {
        if (this.sgrades == enum_1.Grade.A) {
            console.log("good job1");
        }
        if (this.sgrades == enum_1.Grade.B) {
            console.log("good job2");
        }
        if (this.sgrades == enum_1.Grade.C) {
            console.log("good job3");
        }
        if (this.sgrades == enum_1.Grade.D) {
            console.log("good job4");
        }
        if (this.sgrades == enum_1.Grade.E) {
            console.log("good job5");
        }
        if (this.sgrades == enum_1.Grade.F) {
            console.log("good job6");
        }
    };
    return student;
}());
var addresstemp = new address_1.Address("Goa", "India");
var student1 = new student("john", "doe", 112358, addresstemp, enum_1.Grade.A);
student1.fullname();
student1.marks = [12, 23, 36, 98, 74, 45];
console.log(student1);
console.log("percentage=" + student1.percent());
student1.advice();
