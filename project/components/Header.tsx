import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Header.module.scss';

const Header: NextPage = () => (
  <header className={styles.header}>
    <hgroup>
      <h1>Pablo Apausa.</h1>
      <h2>Designer, Fullstack Developer.</h2>
      <h2>Contact.</h2>
    </hgroup>
  </header>
);

export default Header;
