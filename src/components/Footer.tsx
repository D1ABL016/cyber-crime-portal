import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a237e',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              The National Cyber Crime Reporting Portal is a government initiative to help citizens report cybercrime incidents and get assistance from law enforcement agencies.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link component={RouterLink} to="/report" color="inherit" display="block" sx={{ mb: 1 }}>
              Report Cyber Crime
            </Link>
            <Link component={RouterLink} to="/track" color="inherit" display="block" sx={{ mb: 1 }}>
              Track Report
            </Link>
            <Link component={RouterLink} to="/awareness" color="inherit" display="block" sx={{ mb: 1 }}>
              Cyber Awareness
            </Link>
            <Link component={RouterLink} to="/contact" color="inherit" display="block" sx={{ mb: 1 }}>
              Contact Us
            </Link>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Emergency Contacts
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              National Cyber Crime Helpline: 1930
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Police Emergency: 100
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Women's Helpline: 1091
            </Typography>
            <Typography variant="body2">
              Email: support@cybercrime.gov.in
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} National Cyber Crime Reporting Portal. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 