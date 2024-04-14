import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import Ellipse from './ellipse';

export default function Timeline() {
    const isMobile = useMediaQuery('(max-width: 600px)');
    return (
        <Box style={{ position: 'relative' }}>
            <Typography variant="h3">活動時程</Typography>
            <Ellipse bgColor="#35EB934D" />
            <Image
                src={isMobile ? `/2024/images/timeline-mobile.svg` : `/2024/images/timeline.svg`}
                alt="timeline"
                width={0}
                height={0}
                style={{ width: '80%', height: 'auto', margin: '10px', zIndex: -1 }}
            />
        </Box>
    );
}