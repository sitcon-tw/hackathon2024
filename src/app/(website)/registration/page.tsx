'use client'

import Box from '@mui/material/Box';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import Typography from '@mui/material/Typography';
import Timeline from '@/components/registration/timeline';
import Rule from '@/components/registration/rule';
import Notice from '@/components/registration/notice';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans TC',
    h1: {
      fontSize: '48px'
    },
    h3: {
      fontSize: '30px'
    },
    body1: {
      fontSize: '20px'
    }
  }
});


export default function Registration() {
    return (
      <ThemeProvider theme={theme}>
        <main id="registration" style={{ margin: '10px 5vw' }}>
            <Box style={{ position: 'relative' }}>
              <Typography variant="h1" style={{ margin: '30px 0' }}>報名資訊</Typography>
              <Timeline />
              <Rule />
              <Notice />
            </Box>
        </main>
      </ThemeProvider>
    )
}