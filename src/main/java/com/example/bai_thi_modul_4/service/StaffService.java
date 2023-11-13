package com.example.bai_thi_modul_4.service;

import com.example.bai_thi_modul_4.model.Staff;
import com.example.bai_thi_modul_4.repository.IStaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StaffService implements IStaffService{
    @Autowired
    IStaffRepository iStaffRepository;
    @Override
    public List<Staff> findAll() {
        return iStaffRepository.findAll();
    }

    @Override
    public Staff findById(Long id) {
        return iStaffRepository.findById(id).get();
    }

    @Override
    public void delete(Long id) {
        iStaffRepository.deleteById(id);
    }

    @Override
    public void save(Staff staff) {
        iStaffRepository.save(staff);
    }
    @Override
    public List<Staff> arrange(){
        return iStaffRepository.arrange();
    }
}
