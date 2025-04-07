import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Mock data for demonstration
const mockReports = [
  {
    id: 'CR001',
    date: '2024-04-07',
    crimeType: 'Online Fraud',
    status: 'Under Investigation',
    description: 'Unauthorized transaction in bank account',
  },
  {
    id: 'CR002',
    date: '2024-04-06',
    crimeType: 'Cyber Bullying',
    status: 'Resolved',
    description: 'Harassment on social media',
  },
  {
    id: 'CR003',
    date: '2024-04-05',
    crimeType: 'Identity Theft',
    status: 'Pending',
    description: 'Fake profile created using personal information',
  },
];

const Track: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [reports, setReports] = useState(mockReports);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Investigation':
        return 'warning';
      case 'Resolved':
        return 'success';
      case 'Pending':
        return 'info';
      default:
        return 'default';
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would make an API call to search for reports
    const filteredReports = mockReports.filter(
      (report) =>
        report.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.crimeType.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setReports(filteredReports);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Track Your Report
        </Typography>
        <Typography variant="body1" paragraph align="center" color="text.secondary">
          Enter your report ID or search by crime type to track your cybercrime report status
        </Typography>

        <Box component="form" onSubmit={handleSearch} sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              label="Search by Report ID or Crime Type"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              startIcon={<SearchIcon />}
              sx={{
                bgcolor: '#1a237e',
                '&:hover': {
                  bgcolor: '#0d47a1',
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Report ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Crime Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.id}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{report.crimeType}</TableCell>
                  <TableCell>
                    <Chip
                      label={report.status}
                      color={getStatusColor(report.status) as any}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{report.description}</TableCell>
                </TableRow>
              ))}
              {reports.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No reports found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Track; 