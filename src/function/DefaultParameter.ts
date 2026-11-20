function welcome (name:string, message:string = "Welcome To Typescript"):string{
    return "Hello, " + name + "! " + message;
}
console.log(welcome("Pooja"));
console.log(welcome("Shri","Good Morning!"));