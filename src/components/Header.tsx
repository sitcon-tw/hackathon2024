'use client';

import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useToggle } from '@/hooks/useToggle';
import clsx from 'clsx';
import { useMobile } from '@/utils/RWD';

export default function Header() {
  const isMobile = useMobile();
  const toggle = useToggle(false);
  const options = [
    { label: '黑客松活動', href: '/events' },
    { label: '報名資訊', href: '/registration' },
    { label: '公開資源', href: '/resources' },
    { label: 'SITCON 團隊', href: '/about' },
    { label: '合作夥伴', href: '/sponsor' },
    { label: 'FAQ', href: '/faq' }
  ];

  return (
    <header id="header">
      <Link className="caption" href="/">
        SITCON Hackathon
      </Link>
      <div className="mobile-options">
        <a href="https://sitcon.kktix.cc/events/sitcon-hackathon2024" target="_blank">
          <button className="btn-color">活動報名</button>
        </a>
        <AiOutlineMenu onClick={() => toggle.on()} />
      </div>
      <nav id="nav" className={clsx({ active: toggle.isOpen })}>
        <AiOutlineClose className="close" onClick={toggle.off} />
        {options.map(({ href, label }) => (
          <Link key={label} href={href} onClick={toggle.off}>
            {label}
          </Link>
        ))}
        {!isMobile && (
          <Link
            href="https://sitcon.kktix.cc/events/sitcon-hackathon2024"
            target="_balnk"
            onClick={toggle.off}
          >
            立即報名
          </Link>
        )}
      </nav>
    </header>
  );
}
