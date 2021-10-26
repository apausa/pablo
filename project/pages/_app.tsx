/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pablo Apausa</title>
        <meta name="description" content="Pablo Apausa" />
        <meta property="og:title" content="Pablo Apausa" />
        <meta property="og:description" content="Pablo Apausa" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://apausa.dev/" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
