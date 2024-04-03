'use client'

import Info from '@/components/about/info'
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
            <Info/>
        </ThemeProvider>
    )
}