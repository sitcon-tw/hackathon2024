import Image from 'next/image';
import { Box, Dialog, Paper, PaperProps } from "@mui/material";

interface ImageProps  {
  src: string,
  alt: string,
  [otherOptions: string]: unknown,
}
export function UnselectableImage({ alt, ...props }: ImageProps) {
  return (
    <Box sx={{ pointerEvents: 'none', userSelect: 'none' }}>
      <Image alt={alt} {...props} />
    </Box>
  );
}

interface GradientProps {
   color: string,
   transparent?: string,
   size?: string,
   children: JSX.Element,
};
export function WithGradient<T extends GradientProps>({ children, color, transparent = '66', size = '185px', ...props }: T) {
  return (
    <Box>
        <Box sx={{
          width: size,
          height: size,
          background: `radial-gradient(closest-side, ${color}${transparent}, transparent)`,
          position: 'absolute',
          marginTop: '-40px',
          marginLeft: '10px',
          zIndex: -1,
        }} {...props}>
        </Box>
        {children}
    </Box>
  );
}


import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

interface RainbowDialogProps {
    open: boolean,
    onClose: (value: string) => void,
    children: JSX.Element | JSX.Element[],
}
function PaperComponent(props: PaperProps) {
    return (
        <Paper sx={{background: '#0000'}} {...props} />
    );
}
export function RainbowDialog({ onClose, open, children }: RainbowDialogProps) {
    return (
        <Dialog onClose={onClose} open={open} TransitionComponent={Transition} PaperComponent={PaperComponent}>
            <Box sx={{
                padding: '28px 12px',
                borderWidth: '1px 1px 15px 1px',
                borderStyle: 'solid',
                borderColor: '#0000',
                boxSizing: 'border-box',
                borderRadius: '30px',
                background:
                    'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)) padding-box, linear-gradient(90deg, #3D3393 0%, #2B76B9 31.5%, #2CACD1 58%, #35EB93 81%, #73BB3A 100%) border-box'
            }}>
              { children }
            </Box>
        </Dialog>
    );
}