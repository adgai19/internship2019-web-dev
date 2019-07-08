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
class Person{
        private firstName:string;
        private lastName:string;
        constructor(firstName:string,lastName:string){
                this.firstName=firstName;
                this.lastName=lastName;
        }
        getFN():string{return this.firstName;}
        getLN():string{return this.lastName;}
        setFN(firstName:string){
                this.firstName=firstName;
        }
        setLN(lastName){this.lastName=lastName;}
        getName():string{
                return this.firstName+" "+this.lastName;}
}
var p1=new Person("p1","pq");
console.log(p1);//tostring method

console.log(p1.getName());
console.log(p1.getFN());
console.log(p1.getLN());

p1.setFN("nci");
p1.setLN("nudibds");

console.log(p1.getName());
console.log(p1.getFN());
console.log(p1.getLN());

var p2=new Person("p2","prs");
console.log(p1);
console.log(p2.getName());
console.log(p1.getFN());
console.log(p1.getFN());
enum Enumname{
        d1,d2,d3
}
let day:Enumname;
day=Enumname.d1;
console.log(day);