type GradientButtonProps = {
  text: string;
  href: string;
};

export default function GradientButton({ text, href }: GradientButtonProps) {
  return (
    <a href={href} style={{ textDecoration: 'none', cursor: 'pointer', margin: '0 10px' }}>
      <button
        style={{
          background:
            'linear-gradient(90deg, rgba(61, 51, 147, 0.4) 0%, rgba(43, 118, 185, 0.4) 31.5%, rgba(44, 172, 209, 0.4) 58%, rgba(53, 235, 147, 0.4) 81%, rgba(115, 187, 58, 0.4) 100%)',
          border: '1px solid',
          borderImageSlice: '1',
          borderRadius: '40px',
          borderImageSource:
            'linear-gradient(90deg, #3D3393 0%, #2B76B9 31.5%, #2CACD1 58%, #35EB93 81%, #73BB3A 100%)',
          color: '#fff',
          padding: '10px 20px',
          cursor: 'pointer',
          width: '200px',
          height: '80px',
          fontSize: 'x-large'
        }}
      >
        {text}
      </button>
    </a>
  );
}
