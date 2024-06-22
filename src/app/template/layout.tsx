import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Starter Template',
  description: 'Pre-built template homepage',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
