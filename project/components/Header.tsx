import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Header.module.scss';

const Header: NextPage = () => (
  <header className={styles.header}>
    <hgroup>
      <h1 className={styles.header__title}>Pablo Apausa.</h1>
      <h2 className={styles.header__description}>Designer, Fullstack Developer.</h2>
    </hgroup>
  </header>
);

export default Header;
