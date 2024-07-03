'use client';

import React, { ReactNode } from 'react';

import NavBar from '@/app/components/NavBar/NavBar';
import StyledComponentsRegistry from '@/app/lib/registry';
import GlobalStyles from '@/app/styles/GlobalStyles';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
    <body>
    <StyledComponentsRegistry>
      <GlobalStyles/>
      <NavBar/>
      {children}
    </StyledComponentsRegistry>
    </body>
    </html>
  );
}
