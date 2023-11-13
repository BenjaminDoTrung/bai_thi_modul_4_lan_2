package com.example.bai_thi_modul_4.service;

import com.example.bai_thi_modul_4.model.Staff;


import java.util.List;

public interface IGeneralService<E>{
    List<E> findAll();
    E findById(Long id);
    void delete(Long id);
    void save(E city);
}
