'use client'

import { UnselectableImage } from '@/utils/commonComponent';
import './Schedule.css';
import { Typography, Box, Grid } from "@mui/material";

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
    const coefficient = 2;
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
                <Grid height={`${rowHeight[i + 1]-rowHeight[i]}rem`}>
                    <Grid container direction='column' sx={{ whiteSpace: 'pre-line'}} justifyContent='cneter' alignItems='center'>
                        <Typography variant='body1' fontWeight='bold' sx={{
                            marginTop: `calc(${rowHeight[i + 1]-rowHeight[i]}rem - 1rem)`,
                            marginRight: '20px'
                        }}>{t.replace(/^0+/, '')}</Typography>
                    </Grid>
                </Grid>
            ))}
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
                    <Grid sx={{whiteSpace: 'pre-line'}} item>
                        <Typography variant='body1' fontWeight='bold' sx={{ textAlign: 'center' }}>{content[0]}</Typography>
                    </Grid>
                </Grid>)
            )}
        </Grid>
    );
}

export default function Schedule() {
    return (<Box>
        <Typography variant='h2' fontWeight='bold' sx={{marginBottom: '56px'}}>時程表</Typography>
        <UnselectableImage alt='' src='/2024/images/events/schedule.svg' width='1043' height='1112' style={{
            position: 'absolute',
            marginTop: '-250px',
            marginLeft: '-100px'
        }} />
        <Box>
            <Grid container direction='row'>
                <Grid item>
                    {generateTimeColumn()}
                </Grid>
                {tableContent.map((arr, idx) => generateTableColumn(arr, idx))}
            </Grid>
        </Box>
    </Box>);
}