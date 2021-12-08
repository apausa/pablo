/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import information from '../utils/information';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { TITLE, DESCRIPTION } = information;
  return (
    <>
      <Head>
        <title>Pablo Apausa</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://apausa.io/" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
