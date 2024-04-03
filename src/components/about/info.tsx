'use client'

import guideline from '@/app/guideline';

import Image from 'next/image';
import { Typography, Box } from '@mui/material';

const data = [
    ['總召組', '負責制定決策與引領活動走向，主持核心討論及策劃。'],
    ['行政組', '負責維持常務行政事務，處理票務事項、人力管理與賽後統計事宜。'],
    ['活動組', '負責黑客松議題討論、完善賽制流程與各項活動設計，致力於打造交流性質的學生黑客松。'],
    ['場務組', '負責機動人力、動線、餐飲、報到和物流的規劃，是一群最有熱情、最有活力的朋友們！'],
    ['設計組', '負責主視覺設計、網站設計與各項挖坑補坑等設計事宜，也同樣協助各項印刷物與媒體素材的製作。'],
    ['財務組', '負責與金錢相關的業務。'],
    ['紀錄組', '負責活動的影像紀錄與提供各組所需的影像素材，是一群對攝影與影像有想法的朋友們！'],
    ['資訊組', 'owo'],
    ['編輯組', '負責 SITCON 的社群媒體經營與互動，包含 Facebook、Instagram、Plurk、X、Telegram Channel、Mastodon、Discord、Medium 等平台，以及開源相關活動推廣與其他組別公告事項、大會公告等文案撰寫需求。適合對社群媒體經營有興趣，有新鮮腦汁可以榨的朋友們！'],
    ['行銷組', '是銜接 SITCON 與社會的橋樑，負責探詢潛在的合作單位，連結更多支持 SITCON 理念的夥伴！'],
];

const styles = {
    flexContainer: {
        display: 'flex',
        gap: '72px',
        flexDirection: 'column'
    },
    titleFlexContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '56px'
    },
    bodyFlexContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    financialFlexContainer: {
        display: 'flex',
        alignItems: 'center',
    }
}

function UnselectableImage<T extends { src: string, alt: string }>({ ...props }: T) {
    return (
        <Box sx={{pointerEvents: 'none', userSelect: 'none'}}>
            <Image {...props}/>
        </Box>
    );
}

function getTeamCard(team: string, description: string) {
    if (team === '財務組') {
        return (
            <Box sx={styles.bodyFlexContainer}>
                <Typography variant="h3">{team}</Typography>
                <Box sx={styles.financialFlexContainer}>
                    <Typography variant="body1">{description}</Typography>
                    <UnselectableImage
                        src='/2024/about/avatar.svg'
                        alt='Picture of a character'
                        width={203 * 2.5}
                        height={203 * 2.5}
                        style={{
                            position: 'absolute',
                            zIndex: -2,
                            right: '-2em',
                            marginTop: '-230px'
                        }}
                    />
                </Box>
            </Box>
        )
    }
    return (
        <Box sx={styles.bodyFlexContainer}>
            <Typography variant="h3">{team}</Typography>
            <Typography variant="body1">{description}</Typography>
        </Box>
    );
}

export default function Info() {
    return (
        <Box sx={styles.flexContainer}>
            <Box sx={styles.titleFlexContainer}>
                <Typography variant="h1" fontWeight="bold" >SITCON 團隊</Typography>
                <Box sx={{
                    width: '185px',
                    height: '185px',
                    background: `radial-gradient(closest-side, ${guideline.color3}80, transparent)`,
                    position: 'absolute',
                    zIndex: -1,
                }}/>
                <Typography variant="body1">
                    學生計算機年會（Students’ Information Technology Conference）自 2013 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
                </Typography>
            </Box>
            {data.map(([team, description]) => getTeamCard(team, description))}
        </Box>
    );
}