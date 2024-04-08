'use client'

import { Typography, Box } from "@mui/material"

export default function Workshop() {
    return (
        <Box>
            <Typography variant='h2' fontWeight='bold' marginBottom='2rem'>賽前工作坊</Typography>
            <Typography variant='body1'>
                <b>本次競賽合作的企業方會提供賽前工作坊。</b>透過工作坊，參與者能夠更加熟悉的運用企業提供的資源及服務，建立更強的技能基礎，並學習如何將企業提供的資源與服務整合至他們的專案中。
            </Typography>
        </Box>
    )
}