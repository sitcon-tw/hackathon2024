import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Ellipse from './ellipse';

export default function Notice() {
  return (
    <Box style={{ position: 'relative' }} marginTop="15vh">
      <Typography id="notice" variant="h3" fontWeight="bold" marginBottom="8vh">
        注意事項
      </Typography>
      <Ellipse bgColor="#3D339380" />
      <Box component="ol" sx={{ listStyle: 'decimal', pl: 4 }}>
        <Box component="li">
          <Typography variant="body1">
            主辦方將依據每支隊伍所排志願序，於公布錄取隊伍時，告知每支隊伍所分配到資源提供方提供的工具。
          </Typography>
        </Box>
        <Box component="li">
          <Typography variant="body1">若超過最大參賽人數上限將依報名時間為依據錄取。</Typography>
        </Box>
        <Box component="li">
          <Typography variant="body1">
            主辦方與資源提供方可於活動中拍照與錄影，並作為未來宣傳使用。
          </Typography>
        </Box>
        <Box component="li">
          <Typography variant="body1">
            各參賽隊伍皆需要將作品上傳到 SITCON 黑客松成果存放平台。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
