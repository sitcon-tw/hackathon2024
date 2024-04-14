'use client'

import guideline from "@/app/guideline"
import { WithGradient } from "@/utils/commonComponent"
import { Typography, Box, Grid } from "@mui/material"

export default function Workshop() {
    return (
        <Grid container gap='56px' direction='column' marginTop='80px'>
            <WithGradient color={guideline.color2}>
                <Typography variant='h2' fontWeight='bold'>賽前工作坊</Typography>
            </WithGradient>
            <Typography variant='body1'>
                <b>本次競賽合作的企業方會提供賽前工作坊。</b>透過工作坊，參與者能夠更加熟悉的運用企業提供的資源及服務，建立更強的技能基礎，並學習如何將企業提供的資源與服務整合至他們的專案中。
            </Typography>
            <Grid item container alignItems='center' direction='column'>
                <a className='btn-color' href='#'>
                    <Box>
                        <Typography variant='h4' fontWeight='bold' style={{padding: '10px 40px'}}>
                            詳細資訊
                        </Typography>
                    </Box>
                </a>
            </Grid>
        </Grid>
    )
}