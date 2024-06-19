'use client';

import * as React from 'react';

export const BlackBox = () => {
  return (
    // Black Box
    // Clamp here instead of on text line lengths for mobile
    <div className='bg-fg text-bg px-6 py-9 flex flex-col gap-9 max-w-[456px] sm:flex-row sm:items-start sm:max-w-[9000px] sm:bg-fg md:bg-fg lg:bg-fg'>
      {/* Magic box */}
      <div className='border-4 border-dotted border-bg  aspect-square min-w-12 max-w-[128px] w-[20vw] sm:w-[30vw] sm:max-w-[160px]' />
      {/* Text */}
      <div className='flex flex-col gap-10 items-start text-left max-w-[460px] sm:max-w-[600px]'>
        <div className='flex flex-col gap-0 items-start '>
          <h2 className='text-2xl font-bold leading-tight'>
            How to build a button
          </h2>
          <p className='text-2xl font-normal italic leading-tight '>
            An introduction to the work of design systems
          </p>
        </div>

        <p className='text-2xl font-normal leading-tight'>
          Learn how to design and develop a button, deliver components for your
          team, and manage abstraction.
        </p>
      </div>
    </div>
  );
};
