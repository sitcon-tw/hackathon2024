import { RainbowDialog } from '@/utils/commonComponent';
import { useMobile } from '@/utils/RWD';
import { Box, Button, Card, DialogContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface PropsType {
  url: string;
  image: string;
  name: string;
  description: string;
}
export default function CompanySponsorCard({ name, url, image, description }: PropsType) {
  const isMobile = useMobile();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClickOpen}>
        <Box className="sponsor-card" sx={{ padding: '0' }}>
          <Image
            src={`/2024/images/sponsor/${image}`}
            alt={name}
            width="0"
            height="0"
            style={{ marginTop: '2vh', width: isMobile ? '90%' : '90%', height: 'auto' }}
          />
        </Box>
      </Button>
      <RainbowDialog open={open} onClose={handleClose} white={true}>
        <Box>
          <Box textAlign="center">
            <Typography variant="h2" fontWeight="bold" color="black">
              {name}
            </Typography>
          </Box>

          <DialogContent>
            <Grid container direction="column" alignItems="center">
              <Image
                src={`/2024/images/sponsor/${image}`}
                alt={name}
                width="0"
                height="0"
                style={{ marginTop: '2vh', width: isMobile ? '50%' : '50%', height: 'auto' }}
              />
              <Typography
                variant="body1"
                fontWeight="500"
                marginTop="1vh"
                color="black"
                marginBottom="5vh"
              >
                {description}
              </Typography>
              {url && (
                <a className="btn-color" href={url} target="_blank">
                  <Box>
                    <Typography variant="h4" fontWeight="bold" style={{ padding: '1.5vh 3vw' }}>
                      官方網站
                    </Typography>
                  </Box>
                </a>
              )}
            </Grid>
          </DialogContent>
        </Box>
      </RainbowDialog>
    </>
  );
}
