/* eslint-disable @next/next/no-page-custom-font */
import { ReactNode, useEffect } from 'react';
// import { Inter } from '@next/font/google';
// const inter = Inter();
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Head from 'next/head';
import { RootState } from 'pages/_app';

const Template = ({ children }: { children?: ReactNode }) => {
  // document handle
  const { documentState } = useSelector((state: RootState) => {
    return {
      documentState: state.document,
    };
  });

  useEffect(() => {
    if (documentState.scrollable) {
      document.body.classList.add('is-scrollable');
      document.body.classList.remove('is-clipped');
    } else {
      document.body.classList.remove('is-scrollable');
      document.body.classList.add('is-clipped');
    }
  }, [documentState]);

  return (
    <>
      <Head>
        <title>Company Shop</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Template;
