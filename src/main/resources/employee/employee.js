const employeeTableBody = document.getElementById("employees-tbody");

fetch(baseURL + "/employees")
    .then(response => response.json())
    .then(employees => {
        console.log(employees)
        employees.map(createEmployee);
    });

function createEmployee(employee){
    const employeeTableRow = document.createElement("tr");
    employeeTableRow.id = employee.id

    employeeTableBody.appendChild(employeeTableRow);
    constructEmployeeTableRow(employeeTableRow, employee);

}

function constructEmployeeTableRow(employeeTableRow, employee){
    employeeTableRow.innerHTML = `
            <td>
                <p class="row-employee-id">${(employee.id)}</p>
            </td>
            <td>
                <p class="row-employee-name">${(employee.name)}</p>
            </td>
            <td>
                <img src="Logo.jpg" class="row-employee-image">${(employee.image)}</img>
            </td>
            <td>
                <p class="row-employee-calculatedVacation">${(employee.calculatedVacation)}</p>
            </td>
            <td>
                <p class="row-employee-area">${(employee.area.name)}</p>
            </td>
            <td>
                <button id="update-button-${employee.id}">📝</button>                       
                <button onclick="deleteEmployee(${employee.id})">❌</button>            
            </td>    
        `;
    document.getElementById(`update-button-${employee.id}`)
        .addEventListener("click", () => updateEmployee(employee));
}
function deleteEmployee(employeeId) {
    fetch(baseURL + "/employees/" + employeeId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(employeeId).remove();
        } else {
            console.log(response.status);
        }
    });
}



