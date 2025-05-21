package com.cybercrime.portal.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "crime_reports")
public class CrimeReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private String crimeType;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private LocalDateTime reportedAt;

    @Column(nullable = false)
    private String status;

    @ManyToOne
    @JoinColumn(name = "reporter_id")
    private User reporter;

    @PrePersist
    protected void onCreate() {
        reportedAt = LocalDateTime.now();
        status = "PENDING";
    }
} 