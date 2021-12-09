const employeeDiv = document.getElementById("employee-div")

fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(result => {
        const terneEmployees = result.filter(employee => employee.area && employee.area.name === 'Ternestuen');
        terneEmployees.map(createEmployeeCard);
    })

function createEmployeeCard(employees) {
    console.log(employees)
    const cardElement = document.createElement("div")

    cardElement.innerHTML = `
        <span><img class="employee-img" src="../../img/abccc.png"></span>
        <span>${employees.name}</span>
    `;
    employeeDiv.appendChild(cardElement);

}
employeeDiv.innerHTML = <script></script>

