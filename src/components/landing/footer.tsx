'use client';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { FacebookOutlined, Instagram, Telegram, YouTube } from '@mui/icons-material';

export default function Footer() {
  const { palette, spacing, breakpoints } = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'rgb(36, 40, 44)',
        color: palette.common.white,
        p: spacing(3),
        [breakpoints.up('sm')]: { px: spacing(8), py: spacing(5) },
        [breakpoints.up('md')]: { px: spacing(20), py: spacing(8) }
      }}
    >
      <Box
        sx={{
          display: 'grid',
          rowGap: spacing(2),
          gridTemplateColumns: '1fr',
          [breakpoints.up('sm')]: {
            gridTemplateColumns: '1fr 1fr'
          },
          a: {
            color: 'inherit',
            textDecorationColor: palette.common.white
          }
        }}
      >
        <Box
          sx={{
            gridArea: '1 / 1 / 2 / -1',
            [breakpoints.up('sm')]: { textAlign: 'center' }
          }}
        >
          <Typography variant="h6">學生計算機年會</Typography>
          <Typography variant="subtitle1">
            Students&apos; Information Technology Conference
          </Typography>
        </Box>
        <Box sx={{ [breakpoints.up('sm')]: { gridArea: '2 / 1 / 3 / 2' } }}>
          <Typography variant="h6">合作聯繫</Typography>
          <Typography variant="subtitle1">
            <Link href="mailto:contact@sitcon.org">contact@sitcon.org</Link>
          </Typography>
        </Box>
        <Box sx={{ [breakpoints.up('sm')]: { gridArea: '3 / 1 / 3 / 2' } }}>
          <Typography variant="h6">合作聯繫</Typography>
          <Typography variant="subtitle1">
            <Link href="mailto:contact@sitcon.org">contact@sitcon.org</Link>
          </Typography>
        </Box>
        <Box sx={{ [breakpoints.up('sm')]: { gridArea: '2 / 2 / 3 / 3' } }}>
          <Typography variant="h6">社群媒體</Typography>
          <Typography>
            <Link href="https://sitcon.org/fb">
              <FacebookOutlined />
            </Link>
            <Link href="https://sitcon.org/instagram">
              <Instagram />
            </Link>
            <Link href="https://sitcon.org/tg">
              <Telegram />
            </Link>
            <Link href="https://sitcon.org/yt">
              <YouTube />
            </Link>
          </Typography>
        </Box>
        <Box sx={{ [breakpoints.up('sm')]: { gridArea: '3 / 2 / 3 / 3' } }}>
          <Typography variant="h6">其他活動</Typography>
          <Typography variant="subtitle1"></Typography>
        </Box>
      </Box>
    </Box>
  );
}
