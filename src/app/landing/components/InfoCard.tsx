'use client';

import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SvgIconComponent } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { shadeColor } from '@/utils/colors';
import Markdown from '@/components/Markdown';

export interface InfoCardProps {
  Icon: SvgIconComponent;
  color: string;
  headline: string;
  text: string;
  subtitle?: string;
  markdown?: boolean;
}

export default function InfoCard(props: InfoCardProps) {
  const { Icon, color, headline, text, subtitle, markdown } = props;
  const { spacing } = useTheme();

  return (
    <>
      <Box
        bgcolor={shadeColor(color, 0.5)}
        color={color}
        sx={{
          borderRadius: '50%',
          fill: color,
          textAlign: 'center',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: spacing(3),
          padding: spacing(1)
        }}
      >
        <Icon sx={{ fontSize: 30 }} />
      </Box>
      {subtitle && (
        <Box>
          <Typography variant="h5">{headline}</Typography>

          <Typography variant="h6" color="textSecondary" paragraph>
            {subtitle}
          </Typography>
        </Box>
      )}
      {!subtitle && (
        <Typography variant="h5" paragraph>
          {headline}
        </Typography>
      )}
      <Typography
        component={markdown ? Markdown : 'div'}
        variant="body1"
        color="textSecondary"
        sx={{ whiteSpace: 'pre-line' }}
      >
        {text}
      </Typography>
    </>
  );
}
