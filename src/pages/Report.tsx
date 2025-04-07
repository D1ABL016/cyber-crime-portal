import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  SelectChangeEvent,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const steps = ['Personal Information', 'Incident Details', 'Review & Submit'];

interface FormData {
  name: string;
  email: string;
  phone: string;
  incidentType: string;
  date: string;
  description: string;
}

const Report: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    incidentType: '',
    date: '',
    description: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(formData);
      navigate('/track');
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as string]) {
      setErrors((prev) => ({
        ...prev,
        [name as string]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.incidentType) newErrors.incidentType = 'Incident type is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.description) newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' } }}>
            <TextField
              required
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              required
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
            <FormControl fullWidth required error={!!errors.incidentType}>
              <InputLabel>Incident Type</InputLabel>
              <Select
                name="incidentType"
                value={formData.incidentType}
                onChange={handleChange}
                label="Incident Type"
              >
                <MenuItem value="phishing">Phishing</MenuItem>
                <MenuItem value="hacking">Hacking</MenuItem>
                <MenuItem value="fraud">Fraud</MenuItem>
                <MenuItem value="cyberbullying">Cyber Bullying</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              {errors.incidentType && (
                <FormHelperText>{errors.incidentType}</FormHelperText>
              )}
            </FormControl>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ display: 'grid', gap: 3 }}>
            <TextField
              required
              fullWidth
              label="Date of Incident"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              error={!!errors.date}
              helperText={errors.date}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label="Incident Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              error={!!errors.description}
              helperText={errors.description}
            />
          </Box>
        );
      case 2:
        return (
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              Review your information
            </Typography>
            <Typography>Name: {formData.name}</Typography>
            <Typography>Email: {formData.email}</Typography>
            <Typography>Phone: {formData.phone}</Typography>
            <Typography>Incident Type: {formData.incidentType}</Typography>
            <Typography>Date: {formData.date}</Typography>
            <Typography>Description: {formData.description}</Typography>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Report Cyber Crime
        </Typography>
        <Paper sx={{ p: 4, mt: 4 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <form onSubmit={handleSubmit}>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary" type="submit">
                  Submit Report
                </Button>
              ) : (
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              )}
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default Report; 