'use client'

import Box from '@mui/material/Box';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import Typography from '@mui/material/Typography';
import Timeline from '@/components/registration/timeline';
import Rule from '@/components/registration/rule';
import Notice from '@/components/registration/notice';
import { theme } from '@/app/guideline';
import { CssBaseline } from '@mui/material';

export default function Registration() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main id="registration" style={{ margin: '10px 5vw' }}>
            <Box style={{ position: 'relative' }}>
              <Typography variant="h1" fontWeight='bold' style={{ margin: '30px 0' }}>報名資訊</Typography>
              <Timeline />
              <Rule />
              <Notice />
            </Box>
        </main>
      </ThemeProvider>
    )
}