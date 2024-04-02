import { IconType } from 'react-icons';
import {
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaYoutube,
  FaOdysee,
  FaFlickr,
  FaMedium,
  FaXTwitter
} from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiPlurk } from 'react-icons/si';
import footerBackgrond from '@/assets/images/SITCON HACKATHON.svg';
import Image from 'next/image';

interface SocialMedia {
  Icon: IconType;
  href: string;
}

export default function Footer() {
  const firstRow: SocialMedia[] = [
    { Icon: FaFacebook, href: 'https://sitcon.org/fb' },
    { Icon: FaInstagram, href: 'https://sitcon.org/instagram' },
    { Icon: FaXTwitter, href: 'https://sitcon.org/twitter' },
    { Icon: FaTelegramPlane, href: 'https://sitcon.org/tg' },
    { Icon: SiPlurk, href: 'https://sitcon.org/plurk' }
  ];
  const secondRow: SocialMedia[] = [
    { Icon: FaDiscord, href: 'https://sitcon.org/discord' },
    { Icon: FaYoutube, href: 'https://sitcon.org/yt' },
    { Icon: FaFlickr, href: 'https://sitcon.org/flickr' },
    { Icon: FaOdysee, href: 'https://sitcon.org/odysee' },
    { Icon: FaMedium, href: 'https://sitcon.org/medium' }
  ];

  const socialMediaMapping = ({ Icon, href }: { Icon: IconType; href: string }, index: number) => (
    <a key={index} href={href}>
      <Icon />
    </a>
  );

  return (
    <footer id="footer">
      <article className="container">
        <section className="SITCON">
          <span>學生計算機年會</span>
          <span>Students&apos; Information Technology Conference</span>
        </section>
        <section className="contact">
          <span>合作聯繫</span>
          <a href="mailto:contact@sitcon.org">contact@sitcon.org</a>
        </section>
        <section className="social">{firstRow.map(socialMediaMapping)}</section>
        <section className="social">{secondRow.map(socialMediaMapping)}</section>
      </article>
      <div className="bg">
        <Image src={footerBackgrond} alt="footer-background" />
      </div>
    </footer>
  );
}
