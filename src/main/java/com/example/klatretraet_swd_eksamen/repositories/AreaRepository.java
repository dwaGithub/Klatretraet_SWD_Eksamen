package com.example.klatretraet_swd_eksamen.repositories;

import com.example.klatretraet_swd_eksamen.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AreaRepository extends JpaRepository<Employee, Long> {
}