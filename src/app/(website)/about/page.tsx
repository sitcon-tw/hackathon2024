'use client';

import { ThemeProvider, createTheme, Typography, Box } from '@mui/material';
import TeamCard from '@/components/about/TeamCard';
import guideline from '@/app/guideline';
import teamInfo from '@/data/json/teamInfo.json';
import { TocContainer } from '@/components/TOC';
import { WithGradient } from '@/utils/commonComponent';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans TC',
    h1: {
      fontSize: '48px'
    },
    h3: {
      fontSize: '30px'
    },
    body1: {
      fontSize: '20px'
    }
  }
});

const styles = {
  flexContainer: {
    display: 'flex',
    gap: '72px',
    flexDirection: 'column',
    padding: '20px 50px 20px 180px'
  },
  titleFlexContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '56px'
  }
};

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <TocContainer>
        <Box className="container" sx={styles.flexContainer}>
          <Box sx={styles.titleFlexContainer}>
            <WithGradient color={guideline.color3} transparent='80'>
                <Typography variant="h1" fontWeight="bold">
                SITCON 團隊
                </Typography>
            </WithGradient>
            <Typography variant="body1">
              學生計算機年會（Students’ Information Technology Conference）自 2013
              年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
            </Typography>
          </Box>
          {teamInfo.map(({ team, description }: { team: string; description: string }) => (
            <TeamCard key={team} team={team} description={description} />
          ))}
        </Box>
      </TocContainer>
    </ThemeProvider>
  );
}