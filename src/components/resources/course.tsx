'use client';

import { Grid, Typography } from '@mui/material';
import { FaCheck } from 'react-icons/fa';

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
  return (
    <Grid container gap="56px" direction="column">
      <Typography id="course" variant="h2" fontWeight="bold">
        線上課程
      </Typography>
      <Grid item container direction="row" justifyContent="space-around" flexWrap="nowrap">
        {data.map(({ name, url }, index) => (
          <Grid
            display="inline-flex"
            item
            container
            key={index}
            direction="row"
            alignItems="center"
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
