'use client'

import './schedule.css';
import { Typography, Box, Grid } from "@mui/material";
import { Table, TableBody, TableRow, TableCell } from '@mui/material';

// times must contain leading zero to ensure 2-digit hour
const times = ['08:30', '09:00', '09:30', '12:00', '13:30', '15:00', '15:30', '16:00', '17:30', '18:00', '19:00', '21:30'];
const codingText = 'Hacking Time';
const tableContent = [
    [['Day1\n7/6 (六)'], ['Day2\n7/7 (日)']],
    [['報到'], [codingText, 3]],
    [['開幕']],
    [[codingText]],
    [['午餐'], ['午餐']],
    [[codingText], ['企業 & 社群擺攤', 3]],
    [['交流時間']],
    [[codingText, 3]],
    [['企業 Demo & 自由 Demo']],
    [['閉幕']],
    [['晚餐'], ['TODO', 2]],
    [[codingText]]
];
const headerHeight = '4rem';
const rowHeight = (() => {
    const ret: string[] = [headerHeight];
    const coefficient = 2;
    for (let i = 1; i < times.length; i++) {
        const latter = Date.parse('1970-01-01T' + times[i] + 'Z');
        const former = Date.parse('1970-01-01T' + times[i - 1] + 'Z');
        ret.push((Math.sqrt((latter.valueOf() - former.valueOf()) / 1000 / 60) / coefficient).toString() + 'rem');
    }
    return ret;
})();

function generateTableRow(arr: (string | number)[][], idx: number) {
    return (
    <TableRow key={idx}>
        <TableCell sx={{padding: '0'}}>
            <Grid container flexDirection='row' sx={{whiteSpace: 'pre-line', height: rowHeight[idx]}} justifyContent='cneter' alignItems='center'>
                <Typography variant='body1' sx={{
                    textAlign: 'center',
                    marginTop: `calc(${rowHeight[idx]} - 1rem)`,
                    // transform: 'translateY(200%)'
                }}>{times[idx]}</Typography>
            </Grid>
        </TableCell>
        { arr.map((content, i) =>
            (<TableCell
                rowSpan={arr[i].length > 1 && typeof arr[i][1] === 'number' ? arr[i][1] : undefined}
                key={i}
                sx={{ padding: '0'}}
            >
                <Grid container flexDirection='row' sx={{whiteSpace: 'pre-line', height: rowHeight[idx]}} justifyContent='cneter' alignItems='center'>
                <Grid item>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>{content[0]}</Typography>
                </Grid>
                </Grid>
            </TableCell>))
        }
    </TableRow>
    );
}

export default function Schedule() {
    return (<Box>
        <Typography variant='h2' fontWeight='bold'>時程表</Typography>
        <Box>
            <Table>
                <TableBody>
                    {tableContent.map((arr, idx) => generateTableRow(arr, idx))}
                </TableBody>
            </Table>
        </Box>
    </Box>);
}