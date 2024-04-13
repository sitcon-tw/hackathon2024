'use client';

import { ComponentProps, useRef } from 'react';
import clsx from 'clsx';
import { useToc } from '@/hooks/useToc';

interface Props extends ComponentProps<'div'> {}

export function TocContainer({ children, id, className, ...props }: Props) {
  return (
    <div id={clsx(id)} className={clsx('toc-container', className)} {...props}>
      <TOC />
      {children}
    </div>
  );
}

export function TOC({ id, className, children, ...props }: Props) {
  const { headings, updateActive, active } = useToc();
  const trigger = useRef<HTMLInputElement>(null);

  const tocOnClick = (id: string) => {
    if (trigger.current) trigger.current.checked = false;
    updateActive(id);
  };

  return (
    <div id={clsx(id, 'toc')} className={clsx(className)} {...props}>
      <input type="checkbox" id="toc-trigger" ref={trigger} />
      <label htmlFor="toc-trigger">本頁目錄</label>
      <div>
        <div>
          {headings.map((head) => (
            <p
              key={head.id}
              className={clsx(`toc-level-${head.level}`, { active: head.id === active })}
              onClick={() => tocOnClick(head.id)}
            >
              {head.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
