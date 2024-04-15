'use client'
import { theme } from "@/app/guideline";
import Course from "@/components/resources/course";
import ResourceCard from "@/components/resources/resourceCard";
import { TocContainer } from "@/components/TOC";
import { CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";

export default function Resources() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TocContainer>
                <Grid container gap='72px' direction='column'>
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
            </TocContainer>
        </ThemeProvider>
    );
}