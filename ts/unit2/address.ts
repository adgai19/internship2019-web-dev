export class Address {
         constructor(private state: string, private country: string){

         }
         getAddress(){
                 return this.state+" "+this.country;
         }
        }