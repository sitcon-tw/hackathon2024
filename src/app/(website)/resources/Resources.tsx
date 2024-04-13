'use client';
import Course from "@/components/resources/course";
import { Grid, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./page";


export default function Resources() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container gap='72px' width='80%' margin='auto' direction='column'>
                <Grid item>
                    <Typography variant='h1' fontWeight='bold'>
                        公開資源
                    </Typography>
                </Grid>
                <Grid item>
                    <Course />
                    <ResourceCard />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
