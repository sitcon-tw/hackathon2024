import { useState, useEffect } from 'react';

interface Headings {
  id: string;
  text: string;
  level: number;
}

export function useToc() {
  const [headings, setHeading] = useState<Headings[]>([]);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h1, h2, h3'));
    setHeading(
      elements
        .map((elem: Element) => ({
          id: elem.id,
          text: elem.innerHTML,
          level: Number(elem.nodeName.charAt(1))
        }))
        .filter(({ id }) => id)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scrollend', onScroll);
    return () => window.removeEventListener('scrollend', onScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headings]);

  function onScroll() {
    const scrollY = document.documentElement.scrollTop;

    for (const heading of headings) {
      const element = document.getElementById(heading.id);
      if (!element) continue;

      if (scrollY <= element.offsetTop + 84) {
        setActive(heading.id);
        return;
      }
    }
  }

  function updateActive(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  }

  return { headings, active, setActive, updateActive };
}
