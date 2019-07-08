/* class Person{
        firstName:string;
        lastName:string;
        constructor(firstName:string,lastName:string){
                this.firstName=firstName;
                this.lastName=lastName;
        }
        getName():string{
                return this.firstName+" "+this.lastName;}
}
var p1=new Person("p1","pq");
console.log(p1);//tostring method
console.log(p1.getName());

var p2=new Person("p2","prs");
console.log(p1);
console.log(p2.getName());

 */
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//access modifiers-public,private,protected,
//go before the veriable name
//getters/accessors mutators/settors
//getpropertyname
//setpropertyname
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFN = function () { return this.firstName; };
    Person.prototype.getLN = function () { return this.lastName; };
    Person.prototype.setFN = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.setLN = function (lastName) { this.lastName = lastName; };
    Person.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var p1 = new Person("p1", "pq");
console.log(p1); //tostring method
console.log(p1.getName());
console.log(p1.getFN());
console.log(p1.getLN());
p1.setFN("nci");
p1.setLN("nudibds");
console.log(p1.getName());
console.log(p1.getFN());
console.log(p1.getLN());
var p2 = new Person("p2", "prs");
console.log(p1);
console.log(p2.getName());
console.log(p1.getFN());
console.log(p1.getFN());
