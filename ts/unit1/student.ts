class address {
        state: string;
        country: string;
}
class student {
        fname: string;
        lname: string;
        rollno: number;
        marks: Array<number>
        saddress: address;
        fullname() {
                console.log(this.fname + ' ' + this.lname);
        }
        percent() {
                let i: number, temp = 0;
                for (i = 0; i < this.marks.length; i++) {
                        temp += this.marks[i];
                }
                temp /= this.marks.length;
                return temp;
        }
}
let addresstemp = new address();
addresstemp.state = "Goa";
addresstemp.country = "India";
let student1 = new student();
student1.fname = "john";
student1.lname = "doe";
student1.fullname();
student1.marks = [12, 23, 36, 98, 74, 45];
student1.rollno = 112358;
student1.saddress = addresstemp;
console.log(student1);
console.log("percentage=" + student1.percent());