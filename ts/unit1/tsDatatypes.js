/* var f1=()=>"h1";
var f2=()=>{
        console.log("hello");
        return "hello";
};
var f3=(a,b)=>a+b;

// call function
console.log(f1());
console.log(f2());
console.log(f3(3,9));tr
console.log(f3(3,'b'))
 */
//let is scoped version of vars
/*  var a=10;
 if(true){
         let a=90;
 }
 console.log(a);
 */
/*  var a=10;
 if(true){
        let  a=90;
 }
 console.log(a)
 */
/*
 var a//type anything
 a=10;
 a="hello";
 a=true;
 console.log(a);
 */
/*
 var a:number//type number
 a=10;
 a="hello";
 a=true;
 console.log(a); */
/*
 var a:string;//type number
 a=10;
 a="hello";
 a=true;
 console.log(a);
 */ /*
var a:boolean;//type number
a=10;
a="hello";
a=true;
console.log(a); */
/*
 var arr:number[];
 arr=[9,8,4,5];
 arr.push(3);
 console.log(arr);
 let i;
 for(i=0;i<arr.length;i++){
  
 console.log(arr.pop());
 } */
/* var tuple: [number, boolean, string];
tuple = [23, true, "hello world"];
console.log(tuple);

let add=(a:number,b:number)=>a+b;
let add2=(x:number,y:number=3,z?:number)=>x+y;//default value =after declaration.
//type declaration are after veriable name or function name
//optional values are indicated by veriablename appended by ? and lie after primary arguments
console.log(add(3,4));
console.log(add2(4,5));
console.log(add2(9,5,7));
 */
/* let calc = (num: number, sqOrCu: number = 2) => {
    if (sqOrCu == 2) {
        return num * num;
    }
    else {
        return num * num * num;
    }

}
console.log(calc(6, 2));
console.log(calc(6, 3));
console.log(calc(6));
 */
//implict typing
/* if a veriable is initialised while declaring, implicit typecasting takes place and the veriable takes the type of the initialised value */
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var a;
a = 5;
console.log(typeof (a));
//-------------------------------------------------------------------------
/* used to hold two different type of contents
syntex*/
var union;
union = 90;
union = "string";
//both valid
