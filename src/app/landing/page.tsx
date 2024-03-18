'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import InfoCard from '@/components/landing/InfoCard';
import infos from './infomationList';
import banner from '../../../public/images/landing-banner.png'

export default function LandingPage() {
  const { spacing, breakpoints } = useTheme();
  return (
    <Box component="main" sx={{ pb: spacing(10), bgcolor: '#fff' }}>
      <Image
        // src="/images/landing-banner.png"
        src={banner}
        alt="landing-banner"
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
      />
      <Box
        sx={{
          width: '100%',
          maxWidth: 1370,
          px: spacing(2),
          mx: 'auto',
          mt: spacing(20),
          [breakpoints.down('md')]: { mt: spacing(18) },
          [breakpoints.down('sm')]: { mt: spacing(16) },
          [breakpoints.down('xs')]: { mt: spacing(14) }
        }}
      >
        <Typography variant="h3" align="center">
          SITCON Hackathon 2024
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" sx={{ whiteSpace: 'pre-line' }}>
          時間：2024/7/6（六）～ 2024/7/7（日） <br />
          地點：待定
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          sx={{
            whiteSpace: 'pre-line',
            mb: spacing(20),
            [breakpoints.down('md')]: { mb: spacing(18) },
            [breakpoints.down('sm')]: { mb: spacing(16) },
            [breakpoints.down('xs')]: { mb: spacing(14) }
          }}
        >
          SITCON 作為台灣學生於資訊領域的入門磚，我們希望透過舉辦 SITCON Hackathon
          鼓勵參與者關懷社會議題，並使用外界資源完成專案，同時提供學生、企業與社群等團隊相互砥礪成長的機會。
        </Typography>
        <Box
          sx={{
            width: '100%',
            maxWidth: 1370,
            px: spacing(2),
            mx: 'auto'
          }}
        >
          <Grid spacing={spacing(2)} container>
            {infos.map((info) => (
              <Grid xs={6} md={4} key={info.headline} item>
                <InfoCard {...info} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
