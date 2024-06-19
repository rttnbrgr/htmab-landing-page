'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import { BlackBox } from '@/components/black-box';
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
          <BlackBox />

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
