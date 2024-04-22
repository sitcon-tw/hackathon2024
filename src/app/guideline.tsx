import { mobileWidth } from '@/utils/RWD';
import { createTheme } from '@mui/material';

const colors = {
  primary: '#73BB3A',
  secondary: '#35EB93',
  color1: '#3D3393',
  color2: '#2CACD1',
  color3: '#2B76B9',
  color4: '#FFFDD1',
  color5: '#385AAC',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#EFEFEF'
};
export default colors;

export const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans TC',
    h1: {
      fontSize: '48px',
      [`@media (max-width:${mobileWidth})`]: {
        fontSize: '30px'
      }
    },
    h2: {
      fontSize: '36px',
      [`@media (max-width:${mobileWidth})`]: {
        fontSize: '24px'
      }
    },
    h3: {
      fontSize: '30px',
      [`@media (max-width:${mobileWidth})`]: {
        fontSize: '22px'
      }
    },
    h4: {
      fontSize: '24px',
      [`@media (max-width:${mobileWidth})`]: {
        fontSize: '20px'
      }
    },
    h5: {
      fontSize: '20px',
      [`@media (max-width:${mobileWidth})`]: {
        fontSize: '18px'
      }
    },
    body1: {
      fontSize: '20px',
      [`@media (max-width:${mobileWidth})`]: {
        fontSize: '18px'
      }
    },
    body2: {
      fontSize: '18px',
      [`@media (max-width:${mobileWidth})`]: {
        fontSize: '16px'
      }
    },
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    mode: 'dark'
  }
});
