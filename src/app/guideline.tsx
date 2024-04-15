import { createTheme } from "@mui/material";

export default {
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

export const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans TC',
    h1: {
      fontSize: '48px'
    },
    h2: {
      fontSize: '36px'
    },
    h3: {
      fontSize: '30px'
    },
    h4: {
      fontSize: '24px'
    },
    h5: {
      fontSize: '20px'
    },
    body1: {
      fontSize: '20px'
    },
    body2: {
      fontSize: '18px'
    },
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    mode: 'dark'
  }
});