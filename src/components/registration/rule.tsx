import { Box, Typography, Link, Grid } from '@mui/material';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { RiMoneyDollarCircleFill, RiTeamFill } from 'react-icons/ri';
import Image from 'next/image';
import Ellipse from './ellipse';

export default function Rule() {
  return (
    <Box style={{ position: 'relative' }}>
      <Image
        src={`/2024/images/registration-rule.svg`}
        alt="registration-rule"
        width={0}
        height={0}
        style={{ width: '40%', height: 'auto', position: 'absolute', left: '60%', top: '0' }}
      />
      <Box style={{ position: 'relative' }}>
        <Ellipse bgColor="#2CACD166" />
        <Typography id="rule" variant="h2" fontWeight="bold">
          報名規則
        </Typography>
      </Box>

      <Grid
        direction="column"
        container
        gap="10vh"
        style={{ marginLeft: '10px', marginTop: '10vh' }}
      >
        <Grid item direction="row" container alignItems="flex-start" justifyContent="flex-start">
          <Grid item>
            <MdPersonAddAlt1 size={40} />
          </Grid>
          <Grid item marginLeft="1vw">
            <Typography id="limitation" variant="h3" fontWeight="bold">
              參賽資格
            </Typography>
            <Typography variant="body1" marginTop="2vh">
              全國各級高中職、大專院校在學學生
            </Typography>
          </Grid>
        </Grid>

        <Grid item direction="row" container alignItems="flex-start" justifyContent="flex-start">
          <Grid item>
            <RiMoneyDollarCircleFill size={40} />
          </Grid>
          <Grid item marginLeft="1vw">
            <Typography id="fee" variant="h3" fontWeight="bold" marginBottom="3vh">
              報名費用
            </Typography>
            <Grid container gap="5vh" direction="column">
              <Typography variant="h5" fontWeight="bold" fontStyle={{ color: '#B7EFFF' }}>
                報名費：500 元 /人
              </Typography>
              <Typography variant="h5" fontWeight="bold" fontStyle={{ color: '#B7EFFF' }}>
                保證金：200 元 /人
              </Typography>
              <Box component="ul" sx={{ listStyle: 'disc', pl: 4 }}>
                <Box component="li">
                  <Typography variant="body1">
                    參賽隊伍需全程參與開幕、Demo、閉幕，且各隊伍需至少一人參加賽前工作坊。保證金將於活動結束後退還。
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1">報名費含衣服、保險、場地清潔等費用。</Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1">
                    因家庭經濟等因素無力負擔報名費之學生另設有補助名額，詳情請見 補助辦法。
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1">
                關於退費事宜，請見{' '}
                <a
                  href="https://drive.google.com/file/d/1l-OTUSgm6OX4UgJDljGek5bi7pv7a1NX/view"
                  target="_blank"
                  style={{ textDecoration: 'underline' }}
                >
                  退費說明文件
                </a>
                。
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item direction="row" container alignItems="flex-start" justifyContent="flex-start">
          <Grid item>
            <RiTeamFill size={40} />
          </Grid>
          <Grid item marginLeft="1vw">
            <Typography id="team-rule" variant="h3" fontWeight="bold" marginBottom="3vh">
              組隊規定
            </Typography>
            <Grid container gap="5vh" direction="column">
              <Box component="ol" sx={{ listStyle: 'decimal', pl: 4 }}>
                <Box component="li">
                  <Typography variant="body1">
                    個人報名、團體報名皆可，2 到 4 人為一支隊伍。
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1">
                    個人報名者主辦方將依報名表單媒合隊友，若最終仍無法成團，則不予錄取。
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1">
                    團體報名者若隊伍未滿 4
                    人，且有意願招募新隊友，可於報名表單上註記，並交由主辦方協助媒合。
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1">
                    報名時需依三個議題及企業方提供的工具進行志願序排序，若單一企業超額，將依亂數分發。
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
