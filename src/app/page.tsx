'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import { BlackBox } from '@/components/black-box';
import { FormEmbed } from '@/components/form-embed';
import UnderlineLink from '@/components/links/UnderlineLink';
import { PageBody } from '@/components/page-body';

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
      <PageBody className='pt-0 pb-12 sm:py-4'>
        <BlackBox />
        <div className='flex flex-col gap-4 px-6 py-6 max-w-[456px] sm:max-w-[500px] lg:pl-[50px]'>
          {/* <h1 className='mt-4'>How to build a button</h1>  */}
          {/* <p className='text-base'>
            Learn how to design, develop, and publish a button from scratch! A
            great introduction to the work of design systems and collaborating
            across design, product, and engineering. 
          </p> */}
          <p className='text-base'>
            Are you interested in dipping your toes into the design system
            world, but feel overwhelmed about where to start? How do I build a
            component system in Figma? How do I translate that into code? What
            about managing the complexity as those change over time? Don't
            forget, you're building a toolkit for the rest of your team so you
            need to document how the whole thing works!
          </p>
          <p className='text-base'>
            If that sounds like a lot, don't worry. We're gonna go through it
            all in this coure. You're gonna walk away confident that you can
            deliver high quality artifacts for your team's design system!
          </p>

          <p className='text-base'>
            Sign up below to get notified when we launch the first modules!
          </p>
          {/* <p className='text-base'>
            Learn how to design, develop, and publish a button from scratch! A
            great introduction to the work of design systems and collaborating
            across design, product, and engineering. I'm baby williamsburg
            flexitarian keffiyeh affogato bespoke ascot bushwick whatever
            unicorn DIY man bun direct trade. Echo park coloring book four loko
            tilde unicorn gentrify. Normcore shoreditch JOMO meh cold-pressed
            cronut. Wolf pickled gluten-free blackbird spyplane shaman butcher
            fashion axe kale chips. Poke roof party put a bird on it
            asymmetrical chambray bitters iPhone keffiyeh. Chambray jianbing
            cupping vinyl sus locavore art party portland. Tousled brunch
            blackbird spyplane, williamsburg seitan sus mumblecore aesthetic.
          </p> */}

          {/* You should write this */}
          {/*
          <p className='mt-2 text-sm text-gray-700'>
            <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
              See the repository
            </ArrowLink>
          </p>
          */}
          <FormEmbed />
        </div>
        <footer className='pt-8 text-gray-700'>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://rttnbrgr.com'>@rttnbrgr</UnderlineLink>
        </footer>
      </PageBody>
    </main>
  );
}
