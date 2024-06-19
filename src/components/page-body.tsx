'use client';

import * as React from 'react';

export const PageBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='layout relative flex min-h-screen flex-col items-center justify-center py-12 sm:px-4'>
      {children}
    </section>
  );
};
