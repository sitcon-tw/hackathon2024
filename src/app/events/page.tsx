'use client'

import Award from '@/components/events/Award';
import Issue from '@/components/events/issue';
import Workshop from '@/components/events/Workshop';
import Schedule from '@/components/events/schedule';
import Criterion from '@/components/events/Criterion';
import guideline from '../guideline';
import ContestResource from '@/components/events/ContestResource';

import { createTheme, ThemeProvider, Typography, Box, CssBaseline } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Noto Sans TC',
        h1: {
            fontSize: '48px'
        },
        h2: {
            fontSize: '36px'
        },
        h3: {
            fontSize: '30px'
        },
        h4: {
            fontSize: '24px'
        },
        body1: {
            fontSize: '20px'
        }
    },
    palette: {
        mode: 'dark'
    }
});

const styles = {
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '72px'
    },
    flexInnerContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
};

function WithGradient<T extends { color: string, transparent?: string }>({ color, transparent = '66', ...props }: T) {
    return <Box sx={{
        width: '185px',
        height: '185px',
        background: `radial-gradient(closest-side, ${color}${transparent}, transparent)`,
        position: 'absolute',
        zIndex: -1,
    }} {...props}/>
}

export default function Events() {
    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box sx={styles.flexContainer} width='80%' margin='auto'>
            <Box sx={styles.flexInnerContainer}>
                <Typography variant='h1' fontWeight='bold'>黑客松活動</Typography>
                <WithGradient color={guideline.primary} />
            </Box>
            <Schedule/>
            <Issue/>
            <ContestResource/>
            <Workshop/>
            <Criterion/>
            <Award/>
        </Box>
    </ThemeProvider>
}