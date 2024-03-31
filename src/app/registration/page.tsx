'use client'

import { ThemeProvider, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Timeline from '@/components/registration/timeline';
import Rule from '@/components/registration/rule';
import Notice from '@/components/registration/notice';


export default function About() {
    // const { spacing } = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
              width: '100%',
              maxWidth: 1370,
              px: theme.spacing(2),
              mx: 'auto',
              mt: theme.spacing(20),
              [theme.breakpoints.down('md')]: { mt: theme.spacing(18) },
              [theme.breakpoints.down('sm')]: { mt: theme.spacing(16) },
              [theme.breakpoints.down('xs')]: { mt: theme.spacing(14) }
            }}>
              <h1>報名資訊</h1>
              <Timeline />
              <Rule />
              <Notice />
            </Box>
        </ThemeProvider>
    )
}