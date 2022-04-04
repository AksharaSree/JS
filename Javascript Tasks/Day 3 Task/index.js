
let employeeArr = [
    { name: "Vijay",  salary: 56000, married: false, gender: "male" },    
    { name: "Karthik",  salary: 80000, married: true , gender: "male"},
    { name: "Akshara",  salary: 60000, married: true , gender: "female"},    
    { name: "Praveen",  salary: 45000, married: false, gender: "male"},
    { name: "Sindhu",  salary: 50000, married: true, gender: "female" }
    ];

let employee = { name: "Vijay",  salary: 56000, married: false, gender: "male" };
    
    
    

// for - loops through a block of code a number of times
console.log("Json object array iteration using for");
for (let i=0; i < employeeArr.length; i++){
    console.log(employeeArr[i]);

}


// for/in - loops through the properties of an object
console.log("Json object iteration using for/in");
for (var objProperty in employee) {    
    console.log(employee[objProperty]);
}

// for/of - loops through the values of an iterable object
console.log("Json object array iteration using for/of");
for (var person of employeeArr) { 
  console.log(person);
}

// forEach - loops through the values of an iterable object
console.log("Json object array iteration using forEach");
employeeArr.forEach(emp=> console.log(emp));
