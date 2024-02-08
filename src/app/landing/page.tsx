import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import InfoCard from './components/InfoCard';
import infos from './infomationList';

export default function LandingPage() {
  return (
    <main>
      <Image
        src="/images/landing-banner.jpg"
        alt="landing-banner"
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
      />
      <Box>
        <Typography variant="h3" align="center">
          SITCON Hackathon 2024
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" style={{ whiteSpace: 'pre-line' }}>
          時間：2024/7/6（六）～ 2024/7/7（日） <br />
          地點：待定
        </Typography>
        <Typography
          variant="body1"
          align="center"
          className="lg-mg-bottom"
          color="textSecondary"
          style={{ whiteSpace: 'pre-line' }}
        >
          SITCON 作為台灣學生於資訊領域的入門磚，我們希望透過舉辦 SITCON Hackathon
          鼓勵參與者關懷社會議題，並使用外界資源完成專案，同時提供學生、企業與社群等團隊相互砥礪成長的機會。
        </Typography>
        <Box>
          <Grid container>
            {infos.map((info) => (
              <Grid xs={6} md={4} key={info.headline} item>
                <InfoCard {...info} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </main>
  );
}
