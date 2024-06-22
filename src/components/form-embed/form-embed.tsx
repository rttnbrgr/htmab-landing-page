'use client';

import Script from 'next/script';
import * as React from 'react';

import './form-embed.css';

export function FormEmbed() {
  return (
    <>
      <div className='_form_27'></div>
      <Script
        async
        src='https://nrothenberger.activehosted.com/f/embed.php?id=27'
        // onLoad={() => console.log('script loaded')}
      />
    </>
  );
}
