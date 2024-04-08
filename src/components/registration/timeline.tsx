import { Box } from '@mui/material';
import Image from 'next/image';
import Ellipse from './ellipse';

export default function Timeline() {
    return (
        <Box style={{ position: 'relative' }}>
            <h2>活動時程</h2>
            <Ellipse bgColor="#35EB934D" />
            <Image
                src={`/2024/images/timeline.svg`}
                alt="timeline"
                width={0}
                height={0}
                style={{ width: '80%', height: 'auto', margin: '10px' }}
            />
        </Box>
    );
}