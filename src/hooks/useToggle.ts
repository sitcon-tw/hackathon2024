import { useState } from 'react';

export function useToggle(defaultValue: boolean = false) {
  const [isOpen, setOpen] = useState<boolean>(defaultValue);

  const on = () => setOpen(true);
  const off = () => setOpen(false);
  const toggle = () => setOpen(!isOpen);

  return { isOpen, on, off, toggle };
}
