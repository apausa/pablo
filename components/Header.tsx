/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <hgroup className={styles.header__top}>
        <h1 className={styles.top__title}>Pablo Apausa.</h1>
        <h2 className={styles.top__description}>Product Designer, Frontend Developer.</h2>
      </hgroup>
    </header>
  );
}
