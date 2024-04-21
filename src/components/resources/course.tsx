'use client';

import { useMobile } from '@/utils/RWD';
import { Grid, Typography } from '@mui/material';

const data = [
  {
    name: '零時小學校',
    url: 'https://g0v.hackmd.io/@jothon/Sch001courses/https%3A%2F%2Fg0v.hackmd.io%2F%40jothon%2FB1NIQnmXs'
  },
  { name: 'Git 入門指南', url: 'https://nulab.com/zh-tw/learn/software-development/git-tutorial/' },
  { name: 'AWS Educate', url: 'https://aws.amazon.com/tw/education/awseducate/' }
];

const buttonText = {
  fontWeight: '500'
};

export default function Course() {
  const isMobile = useMobile();
  return (
    <Grid container gap={isMobile ? '5vh' : '9vh'} direction="column">
      <Typography id="course" variant="h2" fontWeight="bold">
        線上課程
      </Typography>
      <Grid
        item
        container
        direction={isMobile ? 'column' : 'row'}
        gap={isMobile ? '2vh' : undefined}
        justifyContent="space-around"
        marginLeft="10px"
        flexWrap="nowrap"
      >
        {data.map(({ name, url }, index) => (
          <Grid
            display="inline-flex"
            item
            container
            key={index}
            direction="row"
            alignItems="center"
            justifyContent={isMobile ? 'space-between' : undefined}
            width={isMobile ? '90%' : undefined}
            gap="10px"
          >
            <Typography variant="h4" fontWeight="bold">
              {name}
            </Typography>
            <a className="btn-color" href={url} style={{ padding: '5px 15px' }} target="_blank">
              <Typography variant="body2" sx={buttonText}>
                website
              </Typography>
            </a>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
