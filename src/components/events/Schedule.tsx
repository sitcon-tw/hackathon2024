'use client'

import { RainbowDialog, UnselectableImage } from '@/utils/commonComponent';
import './Schedule.css';
import { Typography, Box, Grid, Button, Card, DialogContent } from "@mui/material";
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

// times must contain leading zero to ensure 2-digit hour
const times = ['08:30', '09:00', '09:30', '12:00', '13:00', '14:00', '14:30', '15:30', '16:00', '17:00', '18:00'];
const innerTableContent = [
    [['Day1\n7/6 (六)', 1], ['Day2\n7/7 (日)', 1]],
    [['參賽者報到', 1], ['Hacking Time / 企業擺攤', 3]],
    [['開幕', 1], ['', 0]],
    [['Hacking Time', 1], ['', 0]],
    [['午餐', 1], ['午餐', 1]],
    [['Hacking Time', 3], ['Hacking Time / 企業擺攤', 1]],
    [['', 0], ['上傳作品 / 點心時間', 1]],
    [['', 0], ['Demo Time / 企業 & 社群擺攤', 3]],
    [['點心時間', 1], ['', 0]],
    [['Hacking Time', 2], ['', 0]],
    [['', 0], ['閉幕', 1]],
];
function transpose<T>(matrix: T[][]) {
    const ret: T[][] = [];
    for (var i = 0; i < matrix[0].length; i++) {
        ret.push([]);
        for (var j = 0; j < matrix.length; j++) {
            ret[i].push(matrix[j][i]);
        }
    }
    return ret;
}
const headerHeight = 4;
const rowHeight = (() => {
    const ret: number[] = [0, headerHeight];
    const coefficient = 1.4;
    let prefixSum = headerHeight;
    for (let i = 1; i < times.length; i++) {
        const latter = Date.parse('1970-01-01T' + times[i] + 'Z');
        const former = Date.parse('1970-01-01T' + times[i - 1] + 'Z');
        prefixSum += Math.sqrt((latter.valueOf() - former.valueOf()) / 1000 / 60) / coefficient;
        ret.push(prefixSum);
    }
    return ret;
})();
const tableContent = (() => {
    const ret: (string|number)[][][] = [];
    const sum = [0, 0];
    for (let i = 0; i < innerTableContent.length; i++) {
        ret.push([[], []]);
        for (let j = 0; j < 2; j++) {
            if (innerTableContent[i][j].length) {
                const [a, b] = innerTableContent[i][j];
                ret[i][j].push(a);
                ret[i][j].push(rowHeight[(b as number) + sum[j]] - rowHeight[sum[j]]);
                sum[j] += (b as number);
            }
        }
    }
    return transpose(ret);
})();
const lastElementInColumn = (() => {
    const ret: number[] = [0, 0];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < tableContent[i].length; j++)
            if (tableContent[i][j][1] as number > 0)
                ret[i] = j;
    }
    return ret;
})();

const cellStyles = {
    regular: {
        border: '1px solid',
    },
    topLeft: {
        border: '2px solid',
        borderRadius: '50px 0 0 0'
    },
    topRight: {
        border: '2px solid',
        borderRadius: '0 50px 0 0'
    },
    bottomLeft: {
        border: '1px solid',
        borderRadius: '0 0 0 50px'
    },
    bottomRight: {
        border: '1px solid',
        borderRadius: '0 0 50px 0'
    },
    common: {
        borderColor: '#FFFFFF',
        padding: '0',
        borderCollpase: 'inherit',
        borderSpacing: '0',
    }
};
function getCellStyle(x: number, y: number) {
    if (x === 0 && y === 0)
        return {...cellStyles.topLeft, ...cellStyles.common};
    if (x === 0 && y + 1 === tableContent.length)
        return {...cellStyles.topRight, ...cellStyles.common};
    if (lastElementInColumn[y] === x && y === 0)
        return {...cellStyles.bottomLeft, ...cellStyles.common};
    if (lastElementInColumn[y] === x && y + 1 === tableContent.length)
        return {...cellStyles.bottomRight, ...cellStyles.common};
    return {...cellStyles.regular, ...cellStyles.common};
}

function generateTimeColumn() {
    return (
        <Grid item>
            {times.map((t, i) => (
                <Grid height={`${rowHeight[i + 1]-rowHeight[i]}rem`} key={i}>
                    <Grid container direction='column' sx={{ whiteSpace: 'pre-line'}} justifyContent='cneter' alignItems='center'>
                        <Typography variant='body1' fontWeight='bold' sx={{
                            marginTop: `calc(${rowHeight[i + 1]-rowHeight[i]}rem - 1rem)`,
                            marginRight: '2vw'
                        }}>{t.replace(/^0+/, '')}</Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
}

function GetCell({ content}: { content: string | number }) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    if (content === 'Demo Time / 企業 & 社群擺攤') {
        return (<>
            <Button onClick={handleClickOpen}>
                <Grid direction='column' item container sx={{
                    whiteSpace: 'preline'
                }}>
                    <Typography variant='body1' color='white' fontWeight='bold' sx={{ textAlign: 'center' }}>{content}</Typography>
                    <Grid item alignSelf='flex-end'>
                        <FaInfoCircle width='17px' height='17px' color='white' />
                    </Grid>
                </Grid>
            </Button>
            <RainbowDialog open={open} onClose={handleClose}>
                <Box textAlign='center'>
                    <Typography variant='h2' fontWeight='bold'>Demo Time / 企業 & 社群擺攤</Typography>
                </Box>
                <DialogContent>
                    <Typography variant='h3' fontWeight='bold' marginTop='6vh'>Demo Time</Typography>
                    <Typography variant='body1' marginTop='3vh'>團隊向企業進行成果 Demo 的時間，也提供交流區讓有興趣的團隊向更多人分享專案，與競賽團隊、社群及企業一同交流。</Typography>

                    <Typography variant='h3' fontWeight='bold' marginTop='4vh'>企業 & 社群擺攤</Typography>
                    <Typography variant='body1' marginTop='3vh'>由社群和企業展示其領域的專業知識和成果，讓參與者可以實際的深入了解不同社群所擅長的技術，也可以了解企業的產品及研究。當中也有互動和闖關可以讓社群成員和參與者討論不一樣的觀點和經驗，與企業彼此互相交流，了解目前的趨勢及動態。</Typography>
                </DialogContent>
            </RainbowDialog>
        </>);
    }
    return (
        <Grid sx={{whiteSpace: 'preline'}} item>
            <Typography variant='body1' fontWeight='bold' sx={{ textAlign: 'center' }}>{content}</Typography>
        </Grid>
    );
}
function generateTableColumn(arr: (string | number)[][], idx: number) {
    return (
        <Grid item container direction='column' width='45%' key={idx}>
            {arr.map((content, i) => content[1] as number > 0 && (
                <Grid
                    key={i}
                    sx={getCellStyle(i, idx)}
                    height={`${content[1]}rem`}
                    item
                    container
                    alignItems='center'
                    direction='column'
                    justifyContent='center'
                >
                    <GetCell content={content[0]} />
                </Grid>)
            )}
        </Grid>
    );
}

export default function Schedule() {
    return (<Box>
        <Typography id='schedule' variant='h2' fontWeight='bold' sx={{marginBottom: '9vh'}}>時程表</Typography>
        <UnselectableImage alt='' src='/2024/images/events/schedule.svg' width='1043' height='1112' style={{
            position: 'absolute',
            marginTop: '-40vh',
            marginLeft: '-10vw',
            zIndex: '-1'
        }} />
        <Box>
            <Grid container direction='row' flexWrap='nowrap'>
                <Grid item>
                    {generateTimeColumn()}
                </Grid>
                {tableContent.map((arr, idx) => generateTableColumn(arr, idx))}
            </Grid>
        </Box>
    </Box>);
}