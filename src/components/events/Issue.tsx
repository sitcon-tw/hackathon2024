'use client';

import Image from 'next/image';
import { Typography, Box, Button, Grid } from '@mui/material';
import { MdAdd, MdRemove } from 'react-icons/md';
import '@/assets/styles/pages/events.scss';
import guideline from '@/app/guideline';
import { WithGradient } from '@/utils/commonComponent';
import { useMobile } from '@/utils/RWD';
import data from './issue_data';

function MyButton({ url }: { url: string }) {
  return (
    <a className="btn-color" href={url} target="_blank">
      <Box>
        <Typography variant="h4" fontWeight="bold" style={{ padding: '1.5vh 3vw' }}>
          現況分析
        </Typography>
      </Box>
    </a>
  );
}
function Title({ word, src }: { word: string; src: string }) {
  return (
    <Grid container alignItems="center" gap="1rem" flexWrap="nowrap">
      <Grid item>
        <Image src={`/2024/images/events/${src}.svg`} alt={src} width={50} height={50} />
      </Grid>
      <Grid item>
        <Typography variant="h4" fontWeight="bold">
          {word}
        </Typography>
      </Grid>
    </Grid>
  );
}
type AvailableSponsor = 'iis' | 'sitcon' | 'line';
interface DropdownProps {
  index: string;
  question: string;
  answer: string;
  sponsor: AvailableSponsor;
}
const sponsorMapping = {
  iis: '臺北市政府資訊局',
  sitcon: 'SITCON',
  line: 'LINE'
};
function DropDown({ index, question, answer, sponsor }: DropdownProps) {
  return (
    <div className="qa">
      <div className="qa-card" key={index}>
        <input id={`issue-${index}`} type="checkbox" />
        <div className="qa-content">
          <p className="question">
            <label htmlFor={`issue-${index}`}>
              {question}
              {' X '}
              {sponsorMapping[sponsor]}
            </label>
            <label htmlFor={`issue-${index}`}>
              <MdAdd />
            </label>
            <label htmlFor={`issue-${index}`}>
              <MdRemove />
            </label>
          </p>
          <div className="answer" data-content={answer}></div>
        </div>
      </div>
    </div>
  );
}

const rainbowLine = {
  height: '2px',
  backgroundImage:
    'linear-gradient(90deg, #3D3393 0%, #2B76B9 31.5%, #2CACD1 58%, #35EB93 81%, #73BB3A 100%)'
};

export default function Issue() {
  const isMobile = useMobile();
  return (
    <Grid container gap="10vh" marginTop="10vh">
      <WithGradient color={guideline.primary}>
        <Typography id="issue" variant="h2" fontWeight="bold">
          競賽議題
        </Typography>
      </WithGradient>

      {data.map(({ title, src, description, subproblem, tags, url }, idx) => (
        <Box key={idx}>
          <Grid
            item
            container
            direction={isMobile ? 'column' : 'row'}
            justifyContent="space-between"
          >
            <Grid item container gap="5vh" direction="column" xs={6.5}>
              <Title word={title} src={src} />
              <Typography variant="body1" whiteSpace="pre-line">
                {description}
              </Typography>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-end"
                marginTop="-4vh"
                gap="1.5vw"
              >
                {tags.map((txt, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      border: '1px solid rgba(255, 255, 255, 1)',
                      padding: '1vh 1vw',
                      borderRadius: '50px'
                    }}
                  >
                    <Typography fontSize="16px" fontWeight="500">
                      # {txt}
                    </Typography>
                  </Box>
                ))}
              </Grid>
              <Grid item container alignItems="center" direction="column">
                <MyButton url={url} />
              </Grid>
            </Grid>
            <Grid item container direction="column" xs={4}>
              <Typography variant="h5" fontWeight="bold" marginTop="3vh" marginBottom="5vh">
                相關子議題
              </Typography>
              {subproblem.map(
                ({ title: innerTitle, description: innerDescription, sponsor }, innerIdx) => (
                  <DropDown
                    key={innerIdx}
                    index={`${idx}-${innerIdx}`}
                    question={innerTitle}
                    answer={innerDescription}
                    sponsor={sponsor as AvailableSponsor}
                  />
                )
              )}
            </Grid>
          </Grid>
          {!isMobile && <Box sx={{ marginTop: '10vh', ...rainbowLine }} />}
        </Box>
      ))}
    </Grid>
  );
}
