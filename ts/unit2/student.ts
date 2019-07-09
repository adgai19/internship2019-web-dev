import { Address } from './address'
import { Grade } from './enum'

export class student {
        marks: Array<number>
        private sgrades: Grade;
        constructor(private fname: string, private lname: string, private rollno: number, private saddress: Address) {
                // this.sgrades = Grade.F;
        }
        getFirstName() {
                return this.fname;
        }
        getLastName() {
                return this.lname;
        }
        getRollNo() {
                return this.rollno;
        }
        setFirstName(fname: string) {
                this.fname = fname;
        }
        setLantName(lname: string) {
                this.lname = lname;
        }
        fullName() {
                console.log(this.fname + ' ' + this.lname);
        }
        percent(): number {
                let i: number, temp = 0;
                for (i = 0; i < this.marks.length; i++) {
                        temp += this.marks[i];
                }
                temp /= this.marks.length;
                return temp;
        }
        grade() {
                let percentage = this.percent();
                if (percentage > 90) {
                        this.sgrades = Grade.A;
                }
                else if (percentage > 80) {
                        this.sgrades = Grade.B;
                }
                else if (percentage > 80) {
                        this.sgrades = Grade.B;
                }

                else if (percentage > 70) {
                        this.sgrades = Grade.C;
                }
                else if (percentage > 60) {
                        this.sgrades = Grade.D;
                }
                else if (percentage > 50) {
                        this.sgrades = Grade.E;
                }
                else {
                        this, this.sgrades = Grade.F;
                }
        }
        advice() {
                if (this.sgrades == Grade.A) {
                        console.log("message = good job1");
                }
                if (this.sgrades == Grade.B) {
                        console.log("message = good job2");
                }
                if (this.sgrades == Grade.C) {
                        console.log("message = good job3");
                }
                if (this.sgrades == Grade.D) {
                        console.log("message = good job4");
                }
                if (this.sgrades == Grade.E) {
                        console.log("message = good job5");
                }
                if (this.sgrades == Grade.F) {
                        console.log("message = good job6");
                }

        }
}
let addresstemp = new Address("Goa", "India");
let student1 = new student("john", "doe", 112358, addresstemp);
student1.marks = [95, 93, 96, 98, 94, 75];
console.log(student1);
student1.fullName();
student1.grade();
console.log("percentage=" + student1.percent());
student1.advice();

