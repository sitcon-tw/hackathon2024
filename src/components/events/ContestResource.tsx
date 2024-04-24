'use client';

import React from 'react';
import Image from 'next/image';
import { Typography, Box, Card, Grid, Button, DialogContent } from '@mui/material';
import { RainbowDialog, WithGradient } from '@/utils/commonComponent';
import guideline from '@/app/guideline';
import { useMobile } from '@/utils/RWD';

function MyCard() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid item textAlign="center">
      <Button onClick={handleClickOpen} sx={{}}>
        <Card
          sx={{
            borderRadius: '20px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            background: 'rgba(255, 255, 255, 0.08)'
          }}
        >
          <Grid container gap="2.5vh" direction="column" alignItems="center" padding="3vh 3vw">
            <Typography variant="h4" fontWeight="bold">
              Telegram
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              Telegram Bot
              <br />
              聊天機器人
            </Typography>
            <Grid
              item
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              gap="3px"
            >
              <Typography variant="body1" textAlign="right" fontSize={16}>
                詳細資訊
              </Typography>
              <Image
                src="/2024/images/events/rightArrow.svg"
                alt="right arrow"
                width={15}
                height={15}
                style={{
                  marginRight: '-1vw'
                }}
              />
            </Grid>
          </Grid>
        </Card>
      </Button>
      <RainbowDialog open={open} onClose={handleClose}>
        <Box textAlign="center">
          <Typography variant="h2" fontWeight="bold">
            Telegram
          </Typography>
          <Typography variant="h2" fontWeight="bold">
            Telegram Bot 聊天機器人
          </Typography>
        </Box>
        <DialogContent>
          <Typography variant="h3" fontWeight="bold">
            資源說明
          </Typography>
          <Typography variant="body1" marginTop="4vh">
            是一種在 Telegram 平台幫助你執行各種功能的應用。
            它們提供靈活的互動介面，為用戶完成各種任務或提供服務
          </Typography>

          <Typography variant="h3" fontWeight="bold" marginTop="6vh">
            相關資料
          </Typography>
          <Box
            marginTop="4vh"
            component="ol"
            sx={{ listStyle: 'disc', pl: 4, color: 'rgba(255, 253, 196, 1)' }}
          >
            <Box component="li">
              <a href="https://core.telegram.org/bots/api" target="_blank">
                <Typography variant="body1" sx={{ textDecoration: 'underline' }}>
                  Telegram Bot API
                </Typography>
              </a>
            </Box>
            <Box component="li">
              <a href="https://telegram.me/BotFather" target="_blank">
                <Typography variant="body1" sx={{ textDecoration: 'underline' }}>
                  Telegram Bot Father
                </Typography>
              </a>
            </Box>
          </Box>
        </DialogContent>
      </RainbowDialog>
    </Grid>
  );
}

export default function ContestResource() {
  const isMobile = useMobile();
  return (
    <Box marginTop="13vh">
      <WithGradient color={guideline.color3}>
        <Typography id="contest-resource" variant="h2" fontWeight="bold" marginBottom="2rem">
          專案資源
        </Typography>
      </WithGradient>
      <Grid container justifyContent="space-between" flexWrap={isMobile ? undefined : 'nowrap'}>
        <Typography variant="h5" fontWeight="bold">
          即將公開～
        </Typography>
        {/* <Grid item>
          <MyCard />
        </Grid>
        <Grid item>
          <MyCard />
        </Grid>
        <Grid item >
          <MyCard />
        </Grid>
        <Grid item >
          <MyCard />
        </Grid> */}
      </Grid>
    </Box>
  );
}
