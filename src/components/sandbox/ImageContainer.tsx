'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { useDev } from './DevContext';

interface ImageContainerProps {
  src: string;
  alt: string;
  children?: ReactNode;
  className?: string;
}

export default function ImageContainer({ src, alt, children, className = '' }: ImageContainerProps) {
  const { isDevMode } = useDev();
  return (
    <div
      className={`
        relative w-full h-[60vh] overflow-hidden
        ${className}
        ${isDevMode ? 'border-t border-b border-yellow-500/20' : ''}
      `.trim().replace(/\s+/g, ' ')}
    >
      <Image src={src} alt={alt} fill className="object-cover grayscale" />
      {children && <div className="absolute inset-0 flex items-end p-4">{children}</div>}
    </div>
  );
}