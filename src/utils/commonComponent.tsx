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