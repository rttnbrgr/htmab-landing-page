'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

type PagebodyProps = React.ComponentPropsWithoutRef<'div'>;

export const PageBody = ({ children, className }: PagebodyProps) => {
  return (
    <section
      className={cn(
        'layout relative flex min-h-screen flex-col items-center justify-start pt-0 pb-12',
        'sm:justify-start sm:px-4 sm:py-4',
        className
      )}
    >
      {children}
    </section>
  );
};
