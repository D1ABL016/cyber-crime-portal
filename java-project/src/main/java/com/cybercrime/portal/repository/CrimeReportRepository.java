package com.cybercrime.portal.repository;

import com.cybercrime.portal.model.CrimeReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CrimeReportRepository extends JpaRepository<CrimeReport, Long> {
    List<CrimeReport> findByReporterId(Long reporterId);
    List<CrimeReport> findByStatus(String status);
    List<CrimeReport> findByCrimeType(String crimeType);
} 