'use client'

import Image from 'next/image';
import { Typography, Box, Grid } from "@mui/material";
import { WithGradient } from '@/utils/commonComponent';
import guideline from '@/app/guideline';

export default function Award() {
    return (
        <Box marginTop='70px'>
            <WithGradient color={guideline.secondary} transparent='4D'>
                <Typography id='award' variant='h2' fontWeight='bold' marginBottom='56px'>獎勵方法 </Typography>
            </WithGradient>
            <Typography variant='body1' marginBottom='48px'>
                各個資源提供企業會在最後評選出兩個優秀團隊予以獎項，共 8 組獎項，總獎金 3.2 萬。
            </Typography>
            <Grid container sx={{color: '#B7EFFF'}}>
                <Grid item xs={3} container gap='20px'>
                    <Grid container flexDirection='row' alignItems='center' gap='15px'>
                        <Image src='/2024/images/events/medal.svg' alt='svg' width='35' height='35'/>
                        <Typography variant='h4' fontWeight='bold'>創意獎*4</Typography>
                    </Grid>
                    <Typography variant='h4' fontWeight='bold'>獎金: 4000 元 / 團隊</Typography>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3} container gap='20px'>
                    <Grid container flexDirection='row' alignItems='center' gap='15px'>
                        <Image src='/2024/images/events/medal.svg' alt='svg' width='35' height='35'/>
                        <Typography variant='h4' fontWeight='bold'>技術獎*4</Typography>
                    </Grid>
                    <Typography variant='h4' fontWeight='bold'>獎金: 4000 元 / 團隊</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}