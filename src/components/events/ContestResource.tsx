'use client';

import React from 'react';
import Image from 'next/image';
import { Typography, Box, Card, Grid, Button, DialogContent } from '@mui/material';
import { RainbowDialog, WithGradient } from '@/utils/commonComponent';
import guideline from '@/app/guideline';

const data = [
  {
    provider: 'LINE',
    name: 'LINE Bot/LIFF',
    logo: 'line.png',
    description: '',
    references: [
      {
        title: 'Messaging API',
        url: 'https://developers.line.biz/en/docs/messaging-api/'
      },
      {
        title: 'LINE Front-end Framework (LIFF)',
        url: 'https://developers.line.biz/en/docs/liff/'
      },
      {
        title: '使用規範',
        url: 'https://terms2.line.me/LINE_Developers_Messaging_API?lang=zh-Hant'
      }
    ]
  },
  {
    provider: '臺北市政府資訊局',
    name: '臺北城市儀表板',
    logo: 'city-dashboard.svg',
    description:
      '臺北城市儀表板是臺北市政府的資料視覺化平台，也是臺北市第一個完成原始碼開源的大型專案。',
    references: [
      {
        title: '臺北城市儀表板',
        url: 'https://citydashboard.taipei'
      },
      {
        title: '儀表板技術文件',
        url: 'https://tuic.gov.taipei/documentation'
      },
      {
        title: '儀表板 GitHub',
        url: 'https://github.com/tpe-doit/Taipei-City-Dashboard'
      },
      {
        title: '儀表板開發建置指南',
        url: 'https://www.youtube.com/watch?v=6Qrf_6e9rGY'
      }
    ]
  },
  {
    provider: 'SITCON',
    name: '開源力滿滿',
    logo: 'SITCON-LOGO-icon.svg',
    description:
      'SITCON 提倡自由及開放原始碼精神，參與此組的團隊，不受資源的限制，能夠導入任意開源專案。',
    references: [
      {
        title: '公開資源頁面',
        url: 'https://hackathon.sitcon.org/2024/resources/'
      }
    ]
  }
];

interface ResourceType {
  provider: string;
  name: string;
  logo: string;
  description: string;
  references: {
    title: string;
    url: string;
  }[];
}

function MyCard({ resource }: { resource: ResourceType }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container textAlign="center" height="100%">
      <Button onClick={handleClickOpen}>
        <Card
          sx={{
            borderRadius: '20px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            background: 'rgba(255, 255, 255, 0.08)',
            width: '17rem',
            height: '100%'
          }}
        >
          <Grid
            container
            gap="2.5vh"
            direction="column"
            alignItems="center"
            padding="3vh 3vw"
            height="100%"
          >
            <Typography variant="h4" fontWeight="bold">
              {resource.provider}
            </Typography>
            <Box height="100px">
              <Image
                src={`/2024/images/events/resources/${resource.logo}`}
                alt={resource.name}
                width="0"
                height="0"
                style={{ width: 'auto', height: '100%', margin: 'auto' }}
              />
            </Box>
            <Typography variant="h4" fontWeight="bold">
              {resource.name}
            </Typography>
            <Grid
              item
              marginTop="auto"
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
            {resource.provider}
          </Typography>
          <Typography variant="h2" fontWeight="bold">
            {resource.name}
          </Typography>
        </Box>
        <DialogContent>
          {resource.description !== '' && (
            <>
              <Typography variant="h3" fontWeight="bold">
                資源說明
              </Typography>
              <Typography variant="body1" marginTop="4vh">
                {resource.description}
              </Typography>
            </>
          )}

          <Typography variant="h3" fontWeight="bold" marginTop="6vh">
            相關資料
          </Typography>
          <Box
            marginTop="4vh"
            component="ol"
            sx={{ listStyle: 'disc', pl: 4, color: 'rgba(255, 253, 196, 1)' }}
          >
            {resource.references.map(({ title, url }, idx) => (
              <Box component="li" key={idx}>
                <a href={url} target="_blank">
                  <Typography variant="body1" sx={{ textDecoration: 'underline' }}>
                    {title}
                  </Typography>
                </a>
              </Box>
            ))}
          </Box>
        </DialogContent>
      </RainbowDialog>
    </Grid>
  );
}

export default function ContestResource() {
  return (
    <Box marginTop="13vh">
      <WithGradient color={guideline.color3}>
        <Typography id="contest-resource" variant="h2" fontWeight="bold" marginBottom="2rem">
          專案資源
        </Typography>
      </WithGradient>
      <Grid container>
        {data.map((d, idx) => (
          <Grid item key={idx} height="auto">
            <MyCard resource={d} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
