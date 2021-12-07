import React from 'react';
import Link from 'next/link';

import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link href="/">
            <h1 className={styles.top__title}>
              Pablo Apausa.
            </h1>
          </Link>
        </li>
        <li>
          <h2 className={styles.top__description}>
            Designer, Frontend Developer.
          </h2>
        </li>
        <li>
          <Link href="mailto:pablo@apausa.io">
            <h2>pablo@apausa.io</h2>
          </Link>
        </li>
      </ul>
    </header>
  );
}
