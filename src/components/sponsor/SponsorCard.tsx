import { Grid } from '@mui/material';
import './sponsorCard.css';

export default function SponsorCard({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <Grid className="sponsor-card" container direction="column" alignItems="center">
      {children}
    </Grid>
  );
}
