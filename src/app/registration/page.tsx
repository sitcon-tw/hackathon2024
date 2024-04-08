'use client'

import { ThemeProvider, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Header from '@/components/Header';
import Timeline from '@/components/registration/timeline';
import Rule from '@/components/registration/rule';
import Notice from '@/components/registration/notice';


export default function About() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Box style={{ position: 'relative' }} sx={{
              width: '100%',
              maxWidth: 1370,
              px: theme.spacing(2),
              mx: 'auto',
              mt: theme.spacing(20),
              [theme.breakpoints.down('md')]: { mt: theme.spacing(18) },
              [theme.breakpoints.down('sm')]: { mt: theme.spacing(16) },
              [theme.breakpoints.down('xs')]: { mt: theme.spacing(14) }
            }}>
              <h1 style={{ margin: '30px 0' }}>報名資訊</h1>
              <Timeline />
              <Rule />
              <Notice />
            </Box>
        </ThemeProvider>
    )
}