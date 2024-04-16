'use client';

import { Typography, Box } from '@mui/material';

export default function Criterion() {
  return (
    <Box marginBottom="5vh">
      <Typography id="criterion" variant="h2" fontWeight="bold" marginBottom="9vh">
        評分標準
      </Typography>
      <Box component="ol" sx={{ listStyle: 'decimal', pl: 4 }}>
        <Box component="li">
          <Typography variant="body1">
            各團隊專案將於競賽的第二天下午，依所使用工具的企業方進行
            Demo，每間企業將評選出一組創意獎及一組技術獎。
          </Typography>
        </Box>
        <Box component="li">
          <Typography variant="body1">
            若隊伍完成的專案未使用指定企業提供的工具，則該專案不列入評分。
          </Typography>
        </Box>
        <Box component="li">
          <Typography variant="body1">
            若隊伍成員或完成的專案違反 SITCON 行為準則，則該專案不列入評分。
          </Typography>
        </Box>
        <Box component="li">
          <Typography variant="body1">
            若隊伍 Demo 的專案已在其他競賽/黑客松中獲獎，且查核屬實，則該專案不列入評分。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
