export class User{
        constructor(private fname:string,private lname:string,private  phone:string)
        {

        }
      getName():string{
        return this.fname+" "+this.lname;
      }
      getNo(){
              return this.phone;
      }
}