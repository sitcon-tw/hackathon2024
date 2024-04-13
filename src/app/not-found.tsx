'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/assets/styles/index.scss';

export default function NotFound() {
  const [timer, setTimer] = useState(5);
  const router = useRouter();

  useEffect(
    function () {
      const interval = setInterval(() => {
        if (timer > 0) return setTimer((t) => t - 1);
        router.replace('/');
      }, 1000);
      return () => clearInterval(interval);
    },
    [timer, setTimer, router]
  );

  return (
    <main id="not-found">
      <p>找不到你要的頁面呦！</p>
      <p>{timer} 後跳轉回首頁</p>
      <Link className="btn-color" href="/">
        立即回到首頁
      </Link>
    </main>
  );
}
