import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Header.module.scss';

const Header: NextPage = () => (
  <header className={styles.header}>
    <hgroup className={styles.header__top}>
      <h1 className={styles.top__title}>Pablo Apausa.</h1>
      <h2 className={styles.top__description}>Designer, Fullstack Developer.</h2>
      <h2 className={styles.top__contact}>Contact: pablo@apausa.dev.</h2>
    </hgroup>
  </header>
);

export default Header;
