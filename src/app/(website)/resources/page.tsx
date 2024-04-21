'use client';
import { theme } from '@/app/guideline';
import Course from '@/components/resources/course';
import ResourceCard from '@/components/resources/resourceCard';
import ResourceCardMobile from '@/components/resources/resourceCard_mobile';
import { TocContainer } from '@/components/TOC';
import { useMobile } from '@/utils/RWD';
import { CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material';

export default function Resources() {
  const isMobile = useMobile();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TocContainer>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1" fontWeight="bold" marginBottom={isMobile ? '5vh' : '10vh'}>
              公開資源
            </Typography>
            <Course />
            {isMobile ? <ResourceCardMobile /> : <ResourceCard />}
          </Grid>
        </Grid>
      </TocContainer>
    </ThemeProvider>
  );
}
