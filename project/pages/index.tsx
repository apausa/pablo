import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header';

const Home: NextPage = () => (
  <>
    <Header />
    <main className={styles.home} />
  </>
);

export default Home;
