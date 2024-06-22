import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  // metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder

  // ! Should look like this ===>
  // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  // <link rel="manifest" href="/site.webmanifest">
  // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  // <meta name="msapplication-TileColor" content="#da532c">
  // <meta name="theme-color" content="#ffffff"></meta>

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  // openGraph: {
  //   url: siteConfig.url,
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   siteName: siteConfig.title,
  //   // images: [`${siteConfig.url}/images/og.jpg`],
  //   images: '/images/og.jpg',
  //   type: 'website',
  //   locale: 'en_US',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   // images: [`${siteConfig.url}/images/og.jpg`],
  //   // images: '/images/og.jpg',
  //   creator: '@rttnbrgr',
  // },
  authors: [
    {
      name: 'Nathan @rttnbrgr',
      url: 'https://rttnbrgr.com',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
