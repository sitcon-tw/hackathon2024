import { useMediaQuery } from '@mui/material';

export const mobileWidth = '960px';
export const useMobile = () => useMediaQuery(`(max-width: ${mobileWidth})`);
