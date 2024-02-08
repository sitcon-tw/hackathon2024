'use client';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Teko } from 'next/font/google';

const teko = Teko({ subsets: [], weight: '500' });

export default function Navbar() {
  const { shadows, palette } = useTheme();
  return (
    <nav>
      <AppBar position="sticky" sx={{ boxShadow: shadows[6], bgcolor: palette.common.white }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography
              variant="h4"
              display="inline"
              color="secondary"
              fontWeight={teko.style.fontWeight}
              fontFamily={teko.style.fontFamily}
            >
              SITCON Hackathon 2024
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </nav>
  );
}
