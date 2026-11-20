//Interface for employee
interface Employee {
    id: number;
    name: string;
    email? : string;
    department: string;
 }
 //Manager extends employee interface
 interface Manager extends Employee{
    teamsize : number;
 }

//Creating obj for employee interface
function createEmployee(e: Employee): void{
    console.log("Employee ID:", e.id);
    console.log("Employee Name:", e.name);
    console.log("Employee Email:", e.email);
    console.log("Employee Department:", e.department);
}
//create employee object
let employee1 : Employee = {
    id : 101,
    name : "Pooja",
    email : "pooja@gmail.com",
    department : "ECE"
}

let employee2: Employee = {
    id : 102,
    name : "Raj",
    email : "raj@gmail.com",
    department : "CSE"
}
createEmployee(employee1);
createEmployee(employee2);

//Creating obj for manager interface
function createManager(m: Manager): void{
    createEmployee(m);
    console.log("Manager Team Size:", m.teamsize);
}

//create manager object
let manager1 : Manager = {
    id : 103,
    name : "Arun",
    email : "arun@gmail.com",
    department : "MECH",
    teamsize : 10
}
let manager2 : Manager = {
    id : 104,
    name : "Ravi",
    email : "ravi@gmail.com",
    department : "CIVIL",
    teamsize : 15
}


createManager(manager1);
createManager(manager2);

//Product type
type Product = {
    readonly id: number | string;
    name : string;
    title :string;
    price : number;
};

//product objects
let product1:  Product = {
    id : "EMP001",
    name : "Mobile",
    title : "Samsung Galaxy",
    price : 2000
}

let product2 : Product = {
    id : 2,
    name : "Laptop",
    title : "HP Pavilion",
    price : 5000
}

// update product1 
product1.title = "Samsung Galaxy S21";
product2.name = "Laptop HP";
// product2.id = 3; //Error because it is a readonly property


console.log(product1);
console.log(product2);