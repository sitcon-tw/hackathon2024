'use client';

import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useToggle } from '@/hooks/useToggle';
import clsx from 'clsx';

export default function Header() {
  const toggle = useToggle(false);
  const options = [
    { label: '黑客松活動', href: '#' },
    { label: '報名資訊', href: '#' },
    { label: '公開資訊', href: '#' },
    { label: 'SITCON 團隊', href: '#' },
    { label: '合作夥伴', href: '#' },
    { label: '常見 FAQ', href: '#' },
    { label: '成果存放平台', href: '#' }
  ];

  return (
    <header id="header">
      <Link className="caption" href="/">
        SITCON Hackathon
      </Link>
      <AiOutlineMenu className="hamburger" onClick={() => toggle.on()} />
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
