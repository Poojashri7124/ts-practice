function add (a:number, b:number) : number{
    return  a + b;    
}

console.log (add(34,56));

function add1 (a:number, b:number) : string{
    return "Hi, Pooja!";
}
console.log(add1(33,57));

// Error - the output of the function is not a number, but return type is mentioned as number
// function add2 (a:number, b:number ): number{
//     return "hello";
// }