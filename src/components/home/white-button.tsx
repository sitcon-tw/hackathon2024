import { Link, Typography } from '@mui/material';

type WhiteButtonProps = {
  text: string;
  href: string;
};

export default function WhiteButton({ text, href }: WhiteButtonProps) {
  return (
    <Link href={href}>
      <button
        style={{
          borderRadius: '50px',
          border: '1px solid rgba(210, 210, 210, 1)',
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '25px 40px',
          cursor: 'pointer'
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="white">
          {text}
        </Typography>
      </button>
    </Link>
  );
}
