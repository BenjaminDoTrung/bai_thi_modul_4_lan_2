package com.example.bai_thi_modul_4.service;

import com.example.bai_thi_modul_4.model.Staff;

import java.util.List;

public interface IStaffService extends IGeneralService<Staff> {
    List<Staff> arrange();
}
