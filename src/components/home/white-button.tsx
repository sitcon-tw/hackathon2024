type WhiteButtonProps = {
    text: string;
    href: string;
};

export default function WhiteButton({ text, href }: WhiteButtonProps) {
    return (
        <a href={href} style={{ textDecoration: 'none', cursor: 'pointer', margin: '0 10px' }}>
            <button style={{ backgroundColor: '#FFFFFF33', borderRadius: '40px', width: '180px', height: '80px', fontSize: 'x-large', color: 'white' }}>
                {text}
            </button>
        </a>
    );
}