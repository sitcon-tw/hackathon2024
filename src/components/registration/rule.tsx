import { Box, Typography, Link } from '@mui/material';
import Image from 'next/image';

export default function Rule() {
    return (
        <Box>
            <Image
                src={`/2024/images/registration-rule.svg`}
                alt="registration-rule"
                width={0}
                height={0}
                style={{ width: '40%', height: 'auto', position: 'relative', left: '50%', top: '20px' }}
            />
            <Box>
                <h2>報名規則</h2>
                <Box>
                    <h2>參賽資格</h2>
                    <Typography>全國各級高中職、大專院校在學學生</Typography>
                </Box>
                <Box>
                    <h2>報名費用</h2>
                    <Typography>報名費：500 元 /人</Typography>
                    <Typography>保證金：200 元 /人</Typography>
                    <li>參賽隊伍需全程參與開幕、Demo、閉幕，且各隊伍需至少一人參加賽前工作坊。保證金將於活動結束後退還。</li>
                    <li>報名費含衣服、保險、場地清潔等費用。</li>
                    <li>因家庭經濟等因素無力負擔報名費之學生另設有補助名額，詳情請見 <Link href="https://drive.google.com/file/d/16MQWK86QmC7W0kQ303E00SLlL9wfLIPO/view?usp=sharing">補助辦法</Link>。</li>
                    <li>關於退費事宜，請見 <Link href="https://drive.google.com/file/d/1l-OTUSgm6OX4UgJDljGek5bi7pv7a1NX/view">退費說明文件</Link>。</li>
                </Box>
                <Box>
                    <ol>
                        <li>個人報名、團體報名皆可，2 到 4 人為一支隊伍。</li>
                        <li>個人報名者主辦方將依報名表單媒合隊友，若最終仍無法成團，則不予錄取。</li>
                        <li>團體報名者若隊伍未滿 4 人，且有意願招募新隊友，可於報名表單上註記，並交由主辦方協助媒合。</li>
                        <li>報名時需依三個議題及企業方提供的工具進行志願序排序，若單一企業超額，將依亂數分發。</li>
                    </ol>
                </Box>
            </Box>
        </Box>
    );
}