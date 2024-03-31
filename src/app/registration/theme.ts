import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// colors
const primary = '#ffffff';
const secondary = '#000';
const black = '#343a40';
const background = '#000000CC'
const warningLight = 'rgba(253, 200, 69, .3)';
const warningMain = 'rgba(253, 200, 69, .5)';
const warningDark = 'rgba(253, 200, 69, .7)';

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

// spacing
const spacing = 8;

export default responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: primary },
      secondary: { main: secondary },
      common: { black },
      warning: { light: warningLight, main: warningMain, dark: warningDark },
      tonalOffset: 0.2,
      background: { default: background }
    },
    spacing,
    breakpoints: { values: { xl, lg, md, sm, xs } },
    typography: {
      fontFamily: 'Lato, "Noto Sans TC", sans-serif',
      allVariants: {
        color: '#ffffff'
      }
    }
  })
);