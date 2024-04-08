import { Box } from '@mui/material';
import Ellipse from './ellipse';

export default function Notice() {
    return (
        <Box style={{ position: 'relative' }}>
            <h2>注意事項</h2>
            <Ellipse bgColor="#3D339380" />
            <ol>
                <li>主辦方將依據每支隊伍所排志願序，於公布錄取隊伍時，告知每支隊伍所分配到企業提供的工具。</li>
                <li>若超過最大參賽人數上限將依報名時間為依據錄取。</li>
                <li>企業可與學生洽談合作以將作品運用到公司中。</li>
                <li>主辦方與企業可於活動中拍照與錄影，並作為未來宣傳使用。</li>
                <li>各參賽隊伍皆需要將作品上傳到 SITCON 黑客松成果存放平台。</li>
            </ol>
        </Box>
    );
}