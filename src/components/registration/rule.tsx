import { Box, Typography, Link } from '@mui/material';
import { MdPersonAddAlt1 } from "react-icons/md";
import { RiMoneyDollarCircleFill, RiTeamFill } from "react-icons/ri";
import Image from 'next/image';
import Ellipse from './ellipse';

export default function Rule() {
    return (
        <Box style={{ position: 'relative' }}>
            <Image
                src={`/2024/images/registration-rule.svg`}
                alt="registration-rule"
                width={0}
                height={0}
                style={{ width: '40%', height: 'auto', position: 'absolute', left: '60%', top: '0' }}
            />
            <Box style={{ position: 'relative' }}>
                <Ellipse bgColor="#2CACD166" />
                <h2>報名規則</h2>
            </Box>
            <Box style={{ marginLeft: '10px' }}>
                <Box>
                    <Box style={{ display: 'flex', margin: '10px 0' }}>
                        <div style={{ height: 'fit-content', margin: 'auto 0' }}>
                            <MdPersonAddAlt1 size={25} />
                        </div>
                        <h3 style={{ margin: '0 10px' }}>參賽資格</h3>
                    </Box>
                    <Box style={{ marginLeft: '30px' }}>
                        <Typography>全國各級高中職、大專院校在學學生</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box style={{ display: 'flex', margin: '10px 0' }}>
                        <div style={{ height: 'fit-content', margin: 'auto 0' }}>
                            <RiMoneyDollarCircleFill size={25} />
                        </div>
                        <h3 style={{ margin: '0 10px' }}>報名費用</h3>
                    </Box>
                    <Box style={{ marginLeft: '30px' }}>
                        <Typography fontStyle={{ color: '#B7EFFF' }}>報名費：500 元 /人</Typography>
                        <Typography fontStyle={{ color: '#B7EFFF' }}>保證金：200 元 /人</Typography>
                        <ul style={{ paddingInlineStart: '20px' }}>
                            <li>參賽隊伍需全程參與開幕、Demo、閉幕，且各隊伍需至少一人參加賽前工作坊。保證金將於活動結束後退還。</li>
                            <li>報名費含衣服、保險、場地清潔等費用。</li>
                            <li>因家庭經濟等因素無力負擔報名費之學生另設有補助名額，詳情請見 <Link href="https://drive.google.com/file/d/16MQWK86QmC7W0kQ303E00SLlL9wfLIPO/view?usp=sharing">補助辦法</Link>。</li>
                            <li>關於退費事宜，請見 <Link href="https://drive.google.com/file/d/1l-OTUSgm6OX4UgJDljGek5bi7pv7a1NX/view">退費說明文件</Link>。</li>
                        </ul>
                    </Box>
                </Box>
                <Box>
                    <Box style={{ display: 'flex', margin: '10px 0' }}>
                        <div style={{ height: 'fit-content', margin: 'auto 0' }}>
                            <RiTeamFill size={25} />
                        </div>
                        <h3 style={{ margin: '0 10px' }}>組隊規定</h3>
                    </Box>
                    <Box style={{ marginLeft: '30px' }}>
                        <ol style={{ paddingInlineStart: '20px' }}>
                            <li>個人報名、團體報名皆可，2 到 4 人為一支隊伍。</li>
                            <li>個人報名者主辦方將依報名表單媒合隊友，若最終仍無法成團，則不予錄取。</li>
                            <li>團體報名者若隊伍未滿 4 人，且有意願招募新隊友，可於報名表單上註記，並交由主辦方協助媒合。</li>
                            <li>報名時需依三個議題及企業方提供的工具進行志願序排序，若單一企業超額，將依亂數分發。</li>
                        </ol>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}