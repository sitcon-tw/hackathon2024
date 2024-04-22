'use client';

import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { UnselectableImage } from '@/utils/commonComponent';
import govern from '@/data/json/govern.json';
import api from '@/data/json/api.json';
import tool from '@/data/json/tool.json';

const buttonText = {
  fontWeight: '500'
};

interface CardProps {
  chosen: number;
  handleChosen: (e: SelectChangeEvent) => void;
  data: {
    name: string;
    description: string;
    url: string;
  }[];
  title: string;
}

function Illustrate({ title }: { title: string }) {
  const size = '300';
  let src: string;
  let offset: string;
  if (title === '政府單位開放資料平台') {
    offset = '-6vw';
    src = '/2024/images/resources/pic1.svg';
  } else if (title === '實用 API') {
    offset = '-25vw';
    src = '/2024/images/resources/pic2.svg';
  } else {
    offset = '-8vw';
    src = '/2024/images/resources/pic3.svg';
  }

  return (
    <UnselectableImage
      src={src}
      width={size}
      height={size}
      alt="插圖"
      style={{
        position: 'absolute',
        marginTop: '-30vh',
        marginLeft: offset
      }}
    />
  );
}
function Card({ chosen, handleChosen, data, title }: CardProps) {
  return (
    <Grid container gap="4vh" direction="column" marginTop="10vh">
      <Grid item>
        <Typography variant="h2" fontWeight="bold" id={title}>
          {title}
        </Typography>
      </Grid>
      <Grid item container direction="column" justifyContent="space-between" gap="1vh">
        <Grid item width="95%">
          <FormControl fullWidth>
            <Select
              labelId={title}
              id={title}
              value={chosen.toString()}
              onChange={handleChosen}
              style={{
                border: '1px solid'
              }}
            >
              {data.map(({ name }, index) => (
                <MenuItem key={index} value={index}>
                  <Typography variant="h3" fontWeight="bold">
                    {name}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          sx={{
            borderTop: 'solid',
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0) 19.29%)'
          }}
        >
          <Illustrate title={title} />
          <Box margin="3vh 7vw">
            <Typography variant="body1">{data[chosen].description}</Typography>
          </Box>
          <a
            className="btn-color"
            href={data[chosen].url}
            style={{ padding: '5px 15px' }}
            target="_blank"
          >
            <Box>
              <Typography variant="body2" sx={{ buttonText }}>
                website
              </Typography>
            </Box>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function ResourceCardMobile() {
  const [governChosen, setGovernChosen] = useState(0);
  const [apiChosen, setApiChosen] = useState(0);
  const [toolChosen, setToolChosen] = useState(0);
  function handleChosen<T>(setChosen: Dispatch<SetStateAction<T>>) {
    return (e: SelectChangeEvent) => setChosen(e.target.value as T);
  }
  return (
    <Grid>
      <Card
        chosen={governChosen}
        handleChosen={handleChosen(setGovernChosen)}
        data={govern}
        title="政府單位開放資料平台"
      />
      <Card
        chosen={apiChosen}
        handleChosen={handleChosen(setApiChosen)}
        data={api}
        title="實用 API"
      />
      <Card
        chosen={toolChosen}
        handleChosen={handleChosen(setToolChosen)}
        data={tool}
        title="開發工具"
      />
    </Grid>
  );
}
