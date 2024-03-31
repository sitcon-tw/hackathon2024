import { Box } from '@mui/material';
import Image from 'next/image';

export default function Timeline() {
    return (
        <Box>
            <h2>活動時程</h2>
            <Image
                src={`/2024/images/timeline.svg`}
                alt="timeline"
                width={0}
                height={0}
                style={{ width: '80%', height: 'auto' }}
            />
        </Box>
    );
}