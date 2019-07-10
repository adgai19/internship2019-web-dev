//objects with methods which cannot be initialised.
//they have a well defined structure which can be inharited through inharitance.
interface PersonI{
        firstName:string;
        lastName:string;
        getFullName():string;
}

class Person implements PersonI{
        firstName:string;
        lastName:string;
        getFullName():string{
                return this.firstName+" "+this.lastName;
        }
        constructor(firstname:string,lastname:string){
                this.firstName=firstname;
                this.lastName=lastname;
        }
}

let admin=new Person("adgai","gai");
console.log(admin);
console.log(admin.getFullName());