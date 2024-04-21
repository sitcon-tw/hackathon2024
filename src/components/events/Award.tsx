'use client';

import Image from 'next/image';
import { Typography, Box, Grid } from '@mui/material';
import { WithGradient } from '@/utils/commonComponent';
import guideline from '@/app/guideline';
import { useMobile } from '@/utils/RWD';

export default function Award() {
  const isMobile = useMobile();
  return (
    <Box marginTop={isMobile ? '5vh' : '12vh'}>
      <WithGradient color={guideline.secondary} transparent="4D">
        <Typography id="award" variant="h2" fontWeight="bold" marginBottom="9vh">
          獎勵辦法
        </Typography>
      </WithGradient>
      <Typography variant="body1" marginBottom="8vh">
        各個資源提供方會在最後評選出兩個優秀團隊予以獎項。
      </Typography>
      <Grid
        container
        sx={{ color: '#B7EFFF' }}
        direction="row"
        justifyContent={isMobile ? 'space-between' : undefined}
      >
        <Grid item xs={isMobile ? 5 : 3} container gap="3vh" direction="column">
          <Grid container flexDirection="row" alignItems="center" gap="1.5vw">
            <Image src="/2024/images/events/medal.svg" alt="svg" width="35" height="35" />
            <Typography variant="h4" fontWeight="bold">
              創意獎
            </Typography>
          </Grid>
          <Typography variant="h4" fontWeight="bold">
            獎金: 4000 元 / 團隊
          </Typography>
        </Grid>
        {!isMobile && <Grid item xs={3}></Grid>}
        <Grid item xs={isMobile ? 5 : 3} container gap="3vh" direction="column">
          <Grid container flexDirection="row" alignItems="center" gap="1.5vw">
            <Image src="/2024/images/events/medal.svg" alt="svg" width="35" height="35" />
            <Typography variant="h4" fontWeight="bold">
              技術獎
            </Typography>
          </Grid>
          <Typography variant="h4" fontWeight="bold">
            獎金: 4000 元 / 團隊
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
