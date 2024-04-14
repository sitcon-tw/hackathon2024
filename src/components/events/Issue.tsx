'use client'

import Image from 'next/image';
import { Typography, Box, Button, Grid } from "@mui/material";
import { MdAdd, MdRemove } from 'react-icons/md';
import '@/assets/styles/pages/events.scss';
import guideline from '@/app/guideline';
import { WithGradient } from '@/utils/commonComponent';

function MyButton() {
    return (
        <a className='btn-color' href='#'>
            <Box>
                <Typography variant='h4' fontWeight='bold' style={{padding: '10px 40px'}}>
                    現況分析
                </Typography>
            </Box>
        </a>
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
interface DropdownProps {
    index: string,
    question: string,
    answer: string
}
function DropDown({ index, question, answer }: DropdownProps) {
    return (
        <div className="qa">
        <div className="qa-card" key={index}>
            <input id={`issue-${index}`} type="checkbox" />
            <div className="qa-content">
                <p className="question">
                    <label htmlFor={`issue-${index}`}>{question}</label>
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

const data = [
    {
        title: '平等起跑線：用科技打破歧視的根源',
        description: '歧視，起因於對特定群體的錯誤認知，而衍生成負面情緒、負向行為及區別對待。歧視可能會引發社會對立，影響社會和諧及穩定。我們可以透過教育和傳遞正確資訊，消除大眾的認知錯誤，也可以透過建立多元參與的架構和公平的制度，降低歧視在各場域的發生機率。',
        src: '平等起跑線',
        subproblem: [
            {
                title: 'Telegram Bot X 平等起跑線',
                description: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明',
            },
            {
                title: 'Telegram Bot X 平等起跑線',
                description: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明',
            },
            {
                title: 'Telegram Bot X 平等起跑線',
                description: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明',
            },
        ]
    },
    {
        title: '公創新世代：學生力量與科技共創公民參與',
        description: '公民參與，是讓公眾參與決策及解決問題的過程，也是維護社會健康運作的基礎，確保政府決策與大眾聲音相符。身為社會的一份子，學生也可以透過數位平台和科技工具，協助提升公民意識，從而打造更加民主的社會。',
        src: '公創新世代',
        subproblem: [
            {
                title: 'Cloud Native X 公創新世代',
                description: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明',
            },
            {
                title: 'Cloud Native X 公創新世代',
                description: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明',
            },
            {
                title: 'Cloud Native X 公創新世代',
                description: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明',
            },
        ]
    },
    {
        title: '數位心擁：資訊科技促進心理健康',
        description: '快節奏的社會、突增的工作壓力及社群媒體焦慮，成為現代人心理問題的主要來源。這些因素可能導致情緒低落和憂鬱。而此時資訊科技或許能扮演關鍵角色，提供實用工具和豐富資源，幫助人們管理和應對壓力，實現身心平衡。',
        src: '數位心擁',
        subproblem: [
            {
                title: 'Telegram Bot X 平等起跑線',
                description: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明',
            },
            {
                title: 'Telegram Bot X 平等起跑線',
                description: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明',
            },
            {
                title: 'Telegram Bot X 平等起跑線',
                description: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明',
            },
        ]
    }
];

const rainbowLine = {
    height: '2px',
    backgroundImage: 'linear-gradient(90deg, #3D3393 0%, #2B76B9 31.5%, #2CACD1 58%, #35EB93 81%, #73BB3A 100%)',
};

export default function Issue() {
    return (
        <Grid container gap='60px' marginTop='60px'>
            <WithGradient color={guideline.primary}>
                <Typography variant='h2' fontWeight='bold'>競賽議題</Typography>
            </WithGradient>

            { data.map(({ title, src, description, subproblem }, idx) => <Box key={idx}>
                <Grid item container gap='94px' direction='row' justifyContent='space-between'>
                    <Grid item container gap='32px' direction='column' xs={6.5}>
                        <Title word={title} src={src} />
                        <Typography variant='body1' whiteSpace='pre-line'>
                            {description}
                        </Typography>
                        <Grid container alignItems='center' direction='column'>
                            <MyButton/>
                        </Grid>
                    </Grid>
                    <Grid item container gap='0px' direction='column' xs={4}>
                        <Typography variant='h5' fontWeight='bold' marginTop='15px' marginBottom='35px'>
                            相關子議題
                        </Typography>
                        { subproblem.map(({ title: innerTitle, description: innerDescription }, innerIdx) => (
                            <DropDown key={innerIdx} index={`${idx}-${innerIdx}`} question={innerTitle} answer={innerDescription} />
                        ))}
                    </Grid>
                </Grid>
                <Box sx={{marginTop: '60px', ...rainbowLine}} />
            </Box>)}
        </Grid>
    );
}