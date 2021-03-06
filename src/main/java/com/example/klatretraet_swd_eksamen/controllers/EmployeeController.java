package com.example.klatretraet_swd_eksamen.controllers;

import com.example.klatretraet_swd_eksamen.DTO.EmployeeCreateDTO;
import com.example.klatretraet_swd_eksamen.DTO.EmployeeEditDTO;
import com.example.klatretraet_swd_eksamen.models.Employee;
import com.example.klatretraet_swd_eksamen.repositories.AreaRepository;
import com.example.klatretraet_swd_eksamen.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    AreaRepository areas;

    @Autowired
    EmployeeRepository employees;

    @GetMapping("/employees")
    public List<Employee> getEmployees(){
        return employees.findAll();
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id){
        return employees.getById(id);
    }

    /*@PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee newEmployee){
        newEmployee.setId(null);

        return employee.save(newEmployee);
    }

    @PostMapping("/employees/{name}")
    public Employee addEmployee(@RequestBody Employee newEmployee, @PathVariable String name){
        newEmployee.setId(null);
        newEmployee.setArea(areas.findById(name).get());
        return employee.save(newEmployee);
    }*/

    @PostMapping("/employees/{name}")
    public EmployeeCreateDTO createEmployee(@PathVariable String name, @RequestBody Employee employeeToCreate){
        return areas.findById(name).map(area -> {
            employeeToCreate.setId(null);
            employeeToCreate.setArea(area);
            Employee createdEmployee = employees.save(employeeToCreate);
            return new EmployeeCreateDTO(createdEmployee, employeeToCreate.getArea().getName());
        }
        ).orElse(new EmployeeCreateDTO("Did not find the Area by area name"));

    }

    @PatchMapping("/employees/{id}")
    public EmployeeEditDTO patchEmployeeById(@PathVariable Long id, @RequestBody Employee employeeToUpdate) {
        return employees.findById(id).map(foundEmployee -> {
            if (employeeToUpdate.getImage() != null) foundEmployee.setImage(employeeToUpdate.getImage());
            if (employeeToUpdate.getName() != null) foundEmployee.setName(employeeToUpdate.getName());
            if (employeeToUpdate.getArea() != null && employeeToUpdate.getArea().getName() != null) foundEmployee.setArea(employeeToUpdate.getArea());

            Employee updatedEmployee = employees.save(foundEmployee);
            return new EmployeeEditDTO(updatedEmployee, employeeToUpdate.getArea().getName());
        }).orElse(new EmployeeEditDTO("medarbejder ikke fundet"));
    }

    @DeleteMapping("/employees/{id}")
    public void deleteEmployeeById(@PathVariable Long id){
        employees.deleteById(id);
    }

}
