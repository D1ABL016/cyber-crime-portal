package com.cybercrime.portal.service;

import com.cybercrime.portal.model.CrimeReport;
import com.cybercrime.portal.repository.CrimeReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CrimeReportService {
    
    @Autowired
    private CrimeReportRepository crimeReportRepository;

    public CrimeReport createReport(CrimeReport report) {
        return crimeReportRepository.save(report);
    }

    public List<CrimeReport> getAllReports() {
        return crimeReportRepository.findAll();
    }

    public Optional<CrimeReport> getReportById(Long id) {
        return crimeReportRepository.findById(id);
    }

    public List<CrimeReport> getReportsByReporter(Long reporterId) {
        return crimeReportRepository.findByReporterId(reporterId);
    }

    public List<CrimeReport> getReportsByStatus(String status) {
        return crimeReportRepository.findByStatus(status);
    }

    public List<CrimeReport> getReportsByCrimeType(String crimeType) {
        return crimeReportRepository.findByCrimeType(crimeType);
    }

    public CrimeReport updateReport(CrimeReport report) {
        return crimeReportRepository.save(report);
    }

    public void deleteReport(Long id) {
        crimeReportRepository.deleteById(id);
    }
} 