import { Typography, Box } from '@mui/material';
import { UnselectableImage } from '@/utils/commonComponent';

const styles = {
  bodyFlexContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  financialFlexContainer: {
    display: 'flex',
    alignItems: 'center'
  }
};

export default function TeamCard({ team, description }: { team: string; description: string }) {
  if (team === '財務組') {
    return (
      <Box sx={styles.bodyFlexContainer}>
        <Typography variant="h3" id={team}>
          {team}
        </Typography>
        <Box sx={styles.financialFlexContainer}>
          <Typography variant="body1">{description}</Typography>
          <UnselectableImage
            src="/2024/about/avatar.svg"
            alt="Picture of a character"
            width={203 * 2.5}
            height={203 * 2.5}
            style={{
              position: 'absolute',
              zIndex: -2,
              right: '-2em',
              marginTop: '-230px'
            }}
          />
        </Box>
      </Box>
    );
  }
  return (
    <Box sx={styles.bodyFlexContainer}>
      <Typography variant="h3" id={team}>
        {team}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
}
