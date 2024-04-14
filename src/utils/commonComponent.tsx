import Image from 'next/image';
import { Box } from "@mui/material";

interface ImageProps  {
  src: string,
  alt: string,
  [otherOptions: string]: unknown,
}
export function UnselectableImage({ ...props }: ImageProps) {
  return (
    <Box sx={{ pointerEvents: 'none', userSelect: 'none' }}>
      <Image {...props} />
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