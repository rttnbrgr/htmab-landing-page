'use client';

import * as React from 'react';

export const PageBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='bg-red-500'>
      <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
        {children}
      </div>
    </section>
  );
};
