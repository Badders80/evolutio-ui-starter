import { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ContentContainer({ children, className = '' }: ContentContainerProps) {
  return (
    <div
      className={`
        bg-black text-white p-8 rounded-lg mx-auto max-w-4xl
        ${className}
        ${process.env.NODE_ENV === 'development' ? 'border border-gray-500/30' : ''}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
}