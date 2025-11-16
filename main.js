/* ==== Easy - Basic Data Retrieval ==== */

// function 1:
function getFirstEmployeeFirstName(employees) {
    return employees[0].firstName;
}
console.log(getFirstEmployeeFirstName(employees));

// function 2:
function getLastEmployeeLastName(employees) {
    return employees[employees.length - 1].lastName;
}
console.log(getLastEmployeeLastName(employees));

// function 3:
function getEmployeeDepartmentById(employees, id) {
    for (let i=0; i<employees.length; i++) {
        if (employees[i].id === id) 
            return employees[i].department;
    }
}
console.log(getEmployeeDepartmentById(employees, 5));

// function 4:
function getEmployeeDepartmentById(employees, id) {
    for (let i=0; i<employees.length; i++) {
        if (employees[i].id === id) 
            return employees[i].department;
    }
}
console.log(getEmployeeDepartmentById(employees, 5));
