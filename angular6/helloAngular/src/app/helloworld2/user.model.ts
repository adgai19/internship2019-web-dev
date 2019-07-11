export class User {
  constructor(private fname: string, private lname: string, public phone: string[], private address: string) {

  }
  getName(): string {
    return this.fname + " " + this.lname;
  }
  // getNo() {
  //   return this.phone;
  // }
  getAddress() {
    return this.address;
  }
}