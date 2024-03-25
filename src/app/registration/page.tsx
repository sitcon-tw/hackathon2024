'use client'

import Timeline from '@/components/registration/timeline';
import Rule from '@/components/registration/rule';
import Notice from '@/components/registration/notice';
import { ThemeProvider, createTheme } from '@mui/material';

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
        fontSize: '20px',
      }
    },
  });


export default function About() {
    return (
        <ThemeProvider theme={theme}>
            <h1>報名資訊</h1>
            <Timeline />
            <Rule />
            <Notice />
        </ThemeProvider>
    )
}