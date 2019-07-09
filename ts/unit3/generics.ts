function echo<t>(args:t):t{
        return args;
}
let call=echo<number>(5);
console.log(call+" "+typeof(call));
let call2=echo<string>("hello");
console.log(call2+" "+typeof(call2));
let call3=echo<boolean>(true);
console.log(call3+" "+typeof(call3));

/* Generics allow us to impliment templates and add argument types on the fly without altering the source code */
/* not doing this may cause type  mismatch like below
function echo(args):string{
        return args    
}
let temp:number=echo(6);

*/