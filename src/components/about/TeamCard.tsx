import { Typography, Box, Grid, Stack } from '@mui/material';
import { UnselectableImage } from '@/utils/commonComponent';
import { useMobile } from '@/utils/RWD';
import Image from 'next/image';

const styles = {
  bodyFlexContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3vh'
  },
  financialFlexContainer: {
    display: 'flex',
    alignItems: 'center'
  }
};

interface Staff {
  team: string;
  name: string;
  role: string;
  email: string;
}
interface TeamCardProps {
  team: string;
  description: string;
  staff: Staff[];
}

function StaffList({ staff }: { staff: Staff[] }) {
  const isMobile = useMobile();
  const size = 200;
  return (
    <Grid container direction="row" gap="4vw">
      {staff.map(({ name, role, email }: Staff, idx: number) => (
        <Grid
          key={idx}
          item
          container
          direction="column"
          style={{
            // width: isMobile ? '23%' : '13%',
            width: '120px',
            height: 'auto'
          }}
          gap="1vh"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              rowGap: '5px'
            }}
          >
            <Image
              src={`https://gravatar.com/avatar/${email}?d=mp&s=${size}`}
              alt=""
              width={0}
              height={0}
              style={{ borderRadius: '50%', aspectRatio: '1/1', width: '80px', height: 'auto' }}
            />
            <Typography variant="h5" textAlign="center" sx={{ fontSize: '.8em' }}>
              {name}
            </Typography>
            <Typography variant="body2" textAlign="center" sx={{ fontSize: '.7em' }}>
              {role}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
export default function TeamCard({ team, description, staff }: TeamCardProps) {
  const isMobile = useMobile();
  if (team === '財務組') {
    return (
      <Box sx={styles.bodyFlexContainer}>
        <Typography variant="h3" fontWeight="bold" id={team}>
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
              right: isMobile ? '-150px' : '-2vw',
              marginTop: '-270px'
            }}
          />
        </Box>
        <StaffList staff={staff.filter((s) => s.team === team)} />
      </Box>
    );
  }
  return (
    <Box sx={styles.bodyFlexContainer}>
      <Typography variant="h3" fontWeight="bold" id={team}>
        {team}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      <StaffList staff={staff.filter((s) => s.team === team)} />
    </Box>
  );
}
