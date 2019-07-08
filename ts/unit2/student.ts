import { Address } from './address'
import { Grade } from './enum'

class student {
        marks: Array<number>
        private sgrades: Grade;
        constructor(private fname: string, private lname: string, private rollno: number, private saddress: Address, ) {
                this.sgrades = Grade.F;
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
        fullname() {
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
                else if (percentage > 70 {
                        this.sgrades = Grade.C;
                }
                else if (percentage > 60) {
                        this.sgrades = Grade.D;
                }
                }
        advice() {
               if (this.sgrades == Grade.A) {
                        console.log("good job1");
                }
                if (this.sgrades == Grade.B) {
                        console.log("good job2");
                }
                if (this.sgrades == Grade.C) {
                        console.log("good job3");
                }
                if (this.sgrades == Grade.D) {
                        console.log("good job4");
                }
                if (this.sgrades == Grade.E) {
                        console.log("good job5");
                }
                if (this.sgrades == Grade.F) {
                        console.log("good job6");
                }

                                }
                        }
                        let addresstemp = new Address("Goa", "India");
                        let student1 = new student("john", "doe", 112358, addresstemp, Grade.A);
                        student1.fullname();
                        student1.marks = [12, 23, 36, 98, 74, 45];
                        console.log(student1);
                        console.log("percentage=" + student1.percent());
                        student1.advice();
