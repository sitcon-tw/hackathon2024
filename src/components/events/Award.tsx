'use client'

import Image from 'next/image';
import { Typography, Box, Grid } from "@mui/material";

export default function Award() {
    return (
        <Box>
            <Typography variant='h2' fontWeight='bold' marginBottom='3rem'>獎勵方法 </Typography>
            <Typography variant='body1' marginBottom='2rem'>
                各個資源提供企業會在最後評選出兩個優秀團隊予以獎項。
            </Typography>
            <Grid container sx={{color: '#B7EFFF'}}>
                <Grid item xs={3}>
                    <Grid container flexDirection='row' alignItems='center'>
                        <Image src='/2024/images/events/medal.svg' alt='svg' width='35' height='35'/>
                        <Typography variant='h4' fontWeight='bold'>創意獎</Typography>
                    </Grid>
                    <Typography variant='h4' fontWeight='bold'>獎金: 4000 元 / 團隊</Typography>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    <Grid container flexDirection='row' alignItems='center'>
                        <Image src='/2024/images/events/medal.svg' alt='svg' width='35' height='35'/>
                        <Typography variant='h4' fontWeight='bold'>技術獎</Typography>
                    </Grid>
                    <Typography variant='h4' fontWeight='bold'>獎金: 4000 元 / 團隊</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}