'use client';

import { ReactNode } from 'react';
import { useDev } from './DevContext';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ContentContainer({ children, className = '' }: ContentContainerProps) {
  const { isDevMode } = useDev();
  return (
    <div
      className={`
        bg-black text-white p-8 rounded-lg mx-auto max-w-4xl
        ${className}
        ${isDevMode ? 'border border-gray-500/30' : ''}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
}