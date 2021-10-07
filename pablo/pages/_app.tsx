/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pablo Apausa</title>
        <meta name="description" content="Designer, Frontend Developer" />
        <meta property="og:title" content="Pablo Apausa" />
        <meta property="og:description" content="Designer, Frontend Developer" />
        <meta property="og:image" content="" />
        <meta property="og:image:alt" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
