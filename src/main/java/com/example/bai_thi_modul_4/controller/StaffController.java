package com.example.bai_thi_modul_4.controller;

import com.example.bai_thi_modul_4.model.Staff;
import com.example.bai_thi_modul_4.service.IStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/staff")
public class StaffController {
    @Autowired
    IStaffService iStaffService;

    @GetMapping
    public ResponseEntity<List<Staff>> showList(){
        return new ResponseEntity<>(iStaffService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Staff> showOne(@PathVariable("id")Long id_staff){
        return new ResponseEntity<>(iStaffService.findById(id_staff), HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<?> update(@RequestBody Staff staff){
        iStaffService.save(staff);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> create(@RequestBody Staff staff){
        iStaffService.save(staff);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")Long id_staff){
        iStaffService.delete(id_staff);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/arrange")
    public ResponseEntity<List<Staff>> arrange(){

        return new ResponseEntity<>( iStaffService.arrange(), HttpStatus.OK);
    }
}
