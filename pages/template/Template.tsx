import { ReactElement, ReactNode } from 'react';
import Header from './components/Header';
import { Inter } from '@next/font/google';
const inter = Inter();
import Head from 'next/head';

const Template = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Company Shop</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main className={inter.className}>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Template;
