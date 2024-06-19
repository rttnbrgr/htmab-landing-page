'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import UnderlineLink from '@/components/links/UnderlineLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-bg'>
        {/* <ViewStarter /> */}
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          {/*
           * Black Box
           * Clamp here instead of on text line lengths for mobile
           */}
          <div className='bg-fg text-bg px-6 py-9 flex flex-col gap-9 max-w-[456px] sm:flex-row sm:items-start sm:max-w-[9000px] sm:bg-green-300 md:bg-slate-300 lg:bg-black'>
            {/* Magic box */}
            <div className='border-4 border-dotted border-bg  aspect-square min-w-12 max-w-[128px] w-[20vw]' />
            {/* Text */}
            <div className='flex flex-col gap-10 items-start text-left max-w-[460px] sm:max-w-[90000px]'>
              <div className='flex flex-col gap-0 items-start '>
                <h2 className='text-2xl font-bold leading-tight'>
                  How to build a button
                </h2>
                <p className='text-2xl font-normal italic leading-tight '>
                  An introduction to the work of design systems
                </p>
              </div>

              <p className='text-2xl font-normal leading-tight'>
                Learn how to design and develop a button, deliver components for
                your team, and manage abstraction.
              </p>
            </div>
          </div>

          {/* You should write this */}
          {/*

          <h1 className='mt-4'>How to build a button</h1> 
          <p className='mt-2 text-sm text-gray-800'>
            I'm baby williamsburg flexitarian keffiyeh affogato bespoke ascot
            bushwick whatever unicorn DIY man bun direct trade. Echo park
            coloring book four loko tilde unicorn gentrify. Normcore shoreditch
            JOMO meh cold-pressed cronut. Wolf pickled gluten-free blackbird
            spyplane shaman butcher fashion axe kale chips. Poke roof party put
            a bird on it asymmetrical chambray bitters iPhone keffiyeh. Chambray
            jianbing cupping vinyl sus locavore art party portland. Tousled
            brunch blackbird spyplane, williamsburg seitan sus mumblecore
            aesthetic.
          </p>
          <p className='mt-2 text-sm text-gray-700'>
            <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
              See the repository
            </ArrowLink>
          </p>
          
          <FormEmbed />
          */}

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://rttnbrgr.com'>@rttnbrgr</UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
