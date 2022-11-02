import { ReactElement, ReactNode } from 'react';
import Header from './components/Header';
// import { Inter } from '@next/font/google';
// const inter = Inter();
import Head from 'next/head';

const Template = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Company Shop</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Template;
