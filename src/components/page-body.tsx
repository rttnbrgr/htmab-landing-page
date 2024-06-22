'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

type PagebodyProps = React.ComponentPropsWithoutRef<'div'>;

export const PageBody = ({ children, className }: PagebodyProps) => {
  return (
    <section
      className={cn(
        'layout relative flex min-h-screen flex-col items-center justify-start pt-0 pb-12',
        'md:justify-center sm:px-4 sm:py-4',
        // 'sm:bg-red-400 md:bg-green-400',
        className
      )}
    >
      {children}
    </section>
  );
};
