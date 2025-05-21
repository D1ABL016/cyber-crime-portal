import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReportIcon from '@mui/icons-material/Report';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SecurityIcon from '@mui/icons-material/Security';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <ReportIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'Report Cyber Crime',
      description: 'File a complaint about cybercrime incidents securely and easily.',
      action: 'Report Now',
      path: '/report'
    },
    {
      icon: <TrackChangesIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'Track Your Report',
      description: 'Check the status of your submitted cybercrime reports.',
      action: 'Track Report',
      path: '/track'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'Cyber Awareness',
      description: 'Learn about cyber security and how to protect yourself online.',
      action: 'Learn More',
      path: '/awareness'
    },
    {
      icon: <ContactSupportIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'Contact Support',
      description: 'Get help and support for cybercrime-related issues.',
      action: 'Contact Us',
      path: '/contact'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#1a237e',
          color: 'white',
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '1fr 1fr',
              },
              gap: 4,
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="h2" component="h1" gutterBottom>
                National Cyber Crime Reporting Portal
              </Typography>
              <Typography variant="h5" component="p" paragraph>
                Report cybercrime incidents and get help from law enforcement agencies
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: '#1a237e',
                  '&:hover': {
                    bgcolor: '#e8eaf6',
                  },
                }}
                onClick={() => navigate('/report')}
              >
                Report Cyber Crime
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {feature.icon}
              <Typography variant="h6" component="h2" sx={{ mt: 2, mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {feature.description}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate(feature.path)}
                sx={{ mt: 'auto' }}
              >
                {feature.action}
              </Button>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 