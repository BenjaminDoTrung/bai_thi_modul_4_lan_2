package com.example.bai_thi_modul_4.controller;

import com.example.bai_thi_modul_4.model.Department;
import com.example.bai_thi_modul_4.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/department")
public class DepartmentController {
    @Autowired
    IDepartmentService iDepartmentService;

    @GetMapping
    public ResponseEntity<List<Department>> showListDepartment(){
        return new ResponseEntity<>(iDepartmentService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Department> findOne(@PathVariable("id")Long id_department){
        return new ResponseEntity<>(iDepartmentService.findById(id_department), HttpStatus.OK);
    }
}
