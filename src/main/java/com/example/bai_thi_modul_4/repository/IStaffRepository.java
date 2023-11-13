package com.example.bai_thi_modul_4.repository;

import com.example.bai_thi_modul_4.model.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IStaffRepository extends JpaRepository<Staff, Long> {
    @Query(value = "SELECT * FROM staff ORDER BY age ASC", nativeQuery = true)
    List<Staff> arrange();
}
