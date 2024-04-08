'use client'

import Image from 'next/image';
import { Typography, Box, Button, Grid } from "@mui/material";

const styles = {
    button: {
        width: '10em',
        border: '1px solid',
        borderRadius: '50px',
        borderImageSource: 'linear-gradient(90deg, #3D3393 0%, #2B76B9 31.5%, #2CACD1 58%, #35EB93 81%, #73BB3A 100%)',
        background: 'linear-gradient(90deg, rgba(61, 51, 147, 0.4) 0%, rgba(43, 118, 185, 0.4) 31.5%, rgba(44, 172, 209, 0.4) 58%, rgba(53, 235, 147, 0.4) 81%, rgba(115, 187, 58, 0.4) 100%)',
    }
};

function MyButton() {
    return (
        <Box sx={{margin: 'auto', width: '10em'}}>
            <Button sx={styles.button}>現況分析</Button>
        </Box>
    );
}
function Title({word, src}: {word: string, src: string}) {
    return (
        <Grid container alignItems='center' gap='1rem'>
            <Grid item>
                <Image src={`/2024/images/events/${src}.svg`} alt={src} width={50} height={50} />
            </Grid>
            <Grid item>
                <Typography variant='h4' fontWeight='bold'>{word}</Typography>
            </Grid>
        </Grid>
    );
}

export default function Issue() {
    return (
        <Grid container gap='3rem'>
            <Typography variant='h2' fontWeight='bold'>競賽議題</Typography>

            <Grid item container gap='1rem'>
                <Title word='平等起跑線：用科技打破歧視的根源' src='平等起跑線'/>
                <Typography variant='body1'>
                    歧視是因為不正當理由區別對待不同群體，通常是由對特定族群錯誤的認知開始，因為錯誤認知產生負面情緒，而負面情緒發展成負向行為。歧視不僅會掀起不同群體之間的對立，更可能進一步的撕裂社會，使社會無法正常運作。 <br/>
                    <br/>
                    消除歧視最好的方法是將正確的資訊傳遞出去，消除對特定族群錯誤錯誤的認知。在現今資訊爆炸的時代，我們是不是可以藉由嶄新的管道將正確的資訊傳遞出去，讓更多人重新認識這些族群。
                </Typography>
                <MyButton/>
            </Grid>

            <Grid item container gap='1rem'>
                <Title word='公創新世代：學生力量與科技共創公民參與' src='公創新世代'/>
                <Typography variant='body1'>
                    公民參與指的是公眾參與決策或協助解決問題的過程，是社會健康運作的基礎，不僅強化了民主制度，也確保社會大眾的聲音和政府的決策相互契合。身為這個社會的一份子，學生也能貢獻一份心力，來提升整體社會的公民意識，從而打造更加民主的未來社會。 <br/>
                    <br/>
                    公民參與的範疇十分廣泛，包含政策制定、公私部門協作、選舉、公民投票或任何促進社會運作的作為。透過數位平台和科技工具，我們能更有效的促進公民參與，提升公民意識。
                </Typography>
                <MyButton/>
            </Grid>

            <Grid item container gap='1rem'>
                <Title word='數位心擁：資訊科技促進心理健康' src='數位心擁'/>
                <Typography variant='body1'>
                    在當今現代社會，快節奏的生活、社交媒體的普及以及工作壓力的增加使得心理健康問題受到普遍大眾的關注。這不僅反映了社會的變遷，也突顯了心理健康的重要性。然而，與此同時，現代科技的不斷演進也為解決這些問題提供了有力的支持。科技不僅能夠協助我們適應壓力，還能夠培養健康的生活習慣，提供實用的工具和豐富的資源，促進心理健康的提升，從而實現身心健康的平衡。
                </Typography>
                <MyButton/>
            </Grid>
        </Grid>
    );
}