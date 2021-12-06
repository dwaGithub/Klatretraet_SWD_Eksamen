const employeeDiv = document.getElementById("employee-div")

fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
        let terneEmployees = result.filter(employee => employee.area && employee.area.name == 'Ternestuen');
        terneEmployees.map(createEmployeeCard);
    })

function createEmployeeCard(employees) {
    console.log(employees)
    const cardElement = document.createElement("div")

    cardElement.innerHTML = `
        <p>${employees.name}</p>
        <p>${employees.image}</p>
    `;
    employeeDiv.appendChild(cardElement);

}


