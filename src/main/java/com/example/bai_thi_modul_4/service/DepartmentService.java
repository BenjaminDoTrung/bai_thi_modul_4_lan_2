package com.example.bai_thi_modul_4.service;

import com.example.bai_thi_modul_4.model.Department;
import com.example.bai_thi_modul_4.model.Staff;
import com.example.bai_thi_modul_4.repository.IDepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService implements IDepartmentService{
    @Autowired
    IDepartmentRepository iDepartmentRepository;
    @Override
    public List<Department> findAll() {
        return iDepartmentRepository.findAll();
    }

    @Override
    public Department findById(Long id) {
        return iDepartmentRepository.findById(id).get();
    }

    @Override
    public void delete(Long id) {
        iDepartmentRepository.deleteById(id);
    }

    @Override
    public void save(Department department) {
        iDepartmentRepository.save(department);
    }
}
