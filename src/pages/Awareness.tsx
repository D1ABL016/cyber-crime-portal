import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PublicIcon from '@mui/icons-material/Public';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmailIcon from '@mui/icons-material/Email';

const Awareness: React.FC = () => {
  const securityTips = [
    {
      title: 'Password Security',
      icon: <LockIcon />,
      tips: [
        'Use strong, unique passwords for each account',
        'Enable two-factor authentication when available',
        'Never share your passwords with anyone',
        'Change passwords regularly',
      ],
    },
    {
      title: 'Mobile Security',
      icon: <PhoneAndroidIcon />,
      tips: [
        'Keep your mobile OS and apps updated',
        'Only download apps from official stores',
        'Be cautious of public Wi-Fi networks',
        'Enable device encryption',
      ],
    },
    {
      title: 'Online Safety',
      icon: <PublicIcon />,
      tips: [
        'Be careful with personal information online',
        'Verify website security (HTTPS)',
        'Use secure payment methods',
        'Be cautious of suspicious links',
      ],
    },
    {
      title: 'Banking Security',
      icon: <AccountBalanceIcon />,
      tips: [
        'Never share banking credentials',
        'Use secure networks for transactions',
        'Monitor account activity regularly',
        'Enable banking alerts',
      ],
    },
    {
      title: 'Email Security',
      icon: <EmailIcon />,
      tips: [
        'Be wary of phishing emails',
        'Don\'t open suspicious attachments',
        'Verify sender email addresses',
        'Use spam filters',
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Cyber Security Awareness
        </Typography>
        <Typography variant="body1" paragraph align="center" color="text.secondary">
          Learn how to protect yourself from cybercrime and stay safe online
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
          },
          gap: 4,
        }}
      >
        {securityTips.map((section, index) => (
          <Card key={index} sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {section.icon}
                <Typography variant="h6" component="h2" sx={{ ml: 1 }}>
                  {section.title}
                </Typography>
              </Box>
              <List>
                {section.tips.map((tip, tipIndex) => (
                  <ListItem key={tipIndex}>
                    <ListItemIcon>
                      <SecurityIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={tip} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom align="center">
          Emergency Contacts
        </Typography>
        <Typography variant="body1" paragraph align="center" color="text.secondary">
          If you believe you are a victim of cybercrime, contact these numbers immediately:
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                National Cyber Crime Helpline
              </Typography>
              <Typography variant="body1" color="primary">
                1930
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Police Emergency
              </Typography>
              <Typography variant="body1" color="primary">
                100
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Women's Helpline
              </Typography>
              <Typography variant="body1" color="primary">
                1091
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Awareness; 