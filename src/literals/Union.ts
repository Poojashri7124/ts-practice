
// 1. Union Types

let employeeId: string | number;

employeeId = 101;
console.log(employeeId);

employeeId = "EMP101";
console.log(employeeId);


// 2. Union + Type Narrowing

function formatId(id: string | number): string {
    if (typeof id === "number") {
        return `ID-${id}`;
    } else {
        return id;
    }
}

// Function Calls
console.log(formatId(5));         // ID-5
console.log(formatId("EMP101"));  // EMP101
