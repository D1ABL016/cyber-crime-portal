package com.cybercrime.portal.controller;

import com.cybercrime.portal.model.CrimeReport;
import com.cybercrime.portal.service.CrimeReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "*")
public class CrimeReportController {

    @Autowired
    private CrimeReportService crimeReportService;

    @PostMapping
    public ResponseEntity<CrimeReport> createReport(@RequestBody CrimeReport report) {
        return ResponseEntity.ok(crimeReportService.createReport(report));
    }

    @GetMapping
    public ResponseEntity<List<CrimeReport>> getAllReports() {
        return ResponseEntity.ok(crimeReportService.getAllReports());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CrimeReport> getReportById(@PathVariable Long id) {
        return crimeReportService.getReportById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/reporter/{reporterId}")
    public ResponseEntity<List<CrimeReport>> getReportsByReporter(@PathVariable Long reporterId) {
        return ResponseEntity.ok(crimeReportService.getReportsByReporter(reporterId));
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<CrimeReport>> getReportsByStatus(@PathVariable String status) {
        return ResponseEntity.ok(crimeReportService.getReportsByStatus(status));
    }

    @GetMapping("/type/{crimeType}")
    public ResponseEntity<List<CrimeReport>> getReportsByCrimeType(@PathVariable String crimeType) {
        return ResponseEntity.ok(crimeReportService.getReportsByCrimeType(crimeType));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CrimeReport> updateReport(@PathVariable Long id, @RequestBody CrimeReport report) {
        return crimeReportService.getReportById(id)
                .map(existingReport -> {
                    report.setId(id);
                    return ResponseEntity.ok(crimeReportService.updateReport(report));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReport(@PathVariable Long id) {
        return crimeReportService.getReportById(id)
                .map(report -> {
                    crimeReportService.deleteReport(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
} 