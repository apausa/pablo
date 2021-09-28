/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles.css';
import Header from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pablo Apausa</title>
        <meta property="og:title" content="Pablo Apausa" />
        <meta name="description" content="Designer, Frontend Developer" />
        <meta property="og:description" content="Designer, Frontend Developer" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <link rel="icon" href="" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
