import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBehead from 'remark-behead';
import { clsx, ClassValue } from 'clsx';

interface MarkdownProps {
  children: string;
  className?: ClassValue;
}

export default function Markdown({ children, className }: MarkdownProps) {
  return (
    <ReactMarkdown className={clsx('markdown', className)} remarkPlugins={[remarkGfm, [remarkBehead, { depth: 2 }]]}>
      {children}
    </ReactMarkdown>
  );
}
