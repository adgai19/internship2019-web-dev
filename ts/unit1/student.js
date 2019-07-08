var address = /** @class */ (function () {
    function address() {
    }
    return address;
}());
var student = /** @class */ (function () {
    function student() {
    }
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
    return student;
}());
var addresstemp = new address();
addresstemp.state = "Goa";
addresstemp.country = "India";
var student1 = new student();
student1.fname = "john";
student1.lname = "doe";
student1.fullname();
student1.marks = [12, 23, 36, 98, 74, 45];
student1.rollno = 112358;
student1.saddress = addresstemp;
console.log(student1);
console.log("percentage=" + student1.percent());
