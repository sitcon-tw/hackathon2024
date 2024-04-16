type EllipseProps = {
  bgColor: string;
};

export default function Ellipse({ bgColor }: EllipseProps) {
  return (
    <div
      style={{
        width: '120px',
        height: '120px',
        background: bgColor,
        borderRadius: '100%',
        position: 'absolute',
        top: '0',
        zIndex: '-1',
        filter: 'blur(50px)'
      }}
    ></div>
  );
}
