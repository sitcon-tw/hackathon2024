'use client'
import Course from "@/components/resources/course";
import ResourceCard from "@/components/resources/resourceCard";
import { TocContainer } from "@/components/TOC";
import { createTheme, Grid, ThemeProvider, Typography } from "@mui/material";

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
        },
        body2: {
            fontSize: '18px'
        }
    },
    palette: {
        mode: 'dark'
    }
});

export default function Resources() {
    return (
        <ThemeProvider theme={theme}>
            <TocContainer>
                <Grid container gap='72px' width='80%' margin='auto' direction='column'>
                    <Grid item>
                        <Typography id="resource" variant='h1' fontWeight='bold'>
                            公開資源
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Course />
                        <ResourceCard />
                    </Grid>
                </Grid>
            </TocContainer>
        </ThemeProvider>
    );
}