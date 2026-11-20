function greet (name:string, title?:string):string{
    if (title){
        return "Hello, " + title + " " + name;
    }
    return "Hello, " + name;
}
console.log(greet("Pooja"));
console.log(greet("Pooja","Ms"));