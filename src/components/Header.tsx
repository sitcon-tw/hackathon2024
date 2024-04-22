'use client';

import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useToggle } from '@/hooks/useToggle';
import clsx from 'clsx';

export default function Header() {
  const toggle = useToggle(false);
  const options = [
    { label: '黑客松活動', href: '/events' },
    { label: '報名資訊', href: '/registration' },
    { label: '公開資源', href: '/resources' },
    { label: 'SITCON 團隊', href: '/about' },
    { label: '合作夥伴', href: '/sponsor' },
    { label: '常見 FAQ', href: '/faq' },
    { label: '成果存放平台', href: '#' }
  ];

  return (
    <header id="header">
      <Link className="caption" href="/">
        SITCON Hackathon
      </Link>
      <div className="mobile-options">
        <button className="btn-color" style={{ visibility: 'hidden' }}>
          活動報名
        </button>
        <AiOutlineMenu onClick={() => toggle.on()} />
      </div>
      <nav id="nav" className={clsx({ active: toggle.isOpen })}>
        <AiOutlineClose className="close" onClick={toggle.off} />
        {options.map(({ href, label }) => (
          <Link key={label} href={href} onClick={toggle.off}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
