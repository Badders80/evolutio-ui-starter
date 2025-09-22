// ======================================================================
// /src/components/layout/SectionShell.tsx
// Ensures consistent gutters & vertical rhythm across all sections.
// ======================================================================
import * as React from 'react';

type Props = React.PropsWithChildren<{
  id?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  spaceY?: 1 | 1.5 | 2; // vertical space multiplier
}>;

export default function SectionShell({ id, className, as = 'section', children, spaceY = 1.5 }: Props) {
  const Comp = as as React.ElementType;
  const space = { 1: 'py-16', 1.5: 'py-20', 2: 'py-24' }[spaceY];
  return (
    <Comp id={id} className={['container mx-auto max-w-6xl px-6 sm:px-8', space, className].filter(Boolean).join(' ')}>
      {children}
    </Comp>
  );
}