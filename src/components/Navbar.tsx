import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1a237e' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SecurityIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Cyber Crime Portal
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button
              component={RouterLink}
              to="/report"
              sx={{ color: 'white', display: 'block', mx: 2 }}
            >
              Report Cyber Crime
            </Button>
            <Button
              component={RouterLink}
              to="/track"
              sx={{ color: 'white', display: 'block', mx: 2 }}
            >
              Track Report
            </Button>
            <Button
              component={RouterLink}
              to="/awareness"
              sx={{ color: 'white', display: 'block', mx: 2 }}
            >
              Cyber Awareness
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              sx={{ color: 'white', display: 'block', mx: 2 }}
            >
              Contact Us
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: '#1a237e',
                '&:hover': {
                  backgroundColor: '#e8eaf6',
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 