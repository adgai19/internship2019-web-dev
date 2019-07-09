class person {
        constructor(public fname: string, public lname: string) {
                console.log("in parent")
        }
        greet() {
                console.log("hi");
        }
}
class programmer extends person {
        language: string
        constructor(fname: string, lname: string) {
                super(fname, lname);
                console.log("in child");
        }
        greet() {
                console.log("hello world");
        }
        greet2() {
                super.greet();
        }
}
let me = new programmer("myname", "name");
console.log(me);
me.greet();
me.greet2();
me.language = "C";
//[polymorphism
let me2: person = new programmer("fname", "lname");
console.log(me2);
//me2.language not avalible
