import React from 'react';
import Link from 'next/link';

import information from '../utils/information';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const { TITLE, DESCRIPTION, CONTACT } = information;
  return (
    <main className={styles.home}>
      <ul className={styles.home__list}>
        <li className={styles.list__element}>
          <Link href="/">
            <h1 className={styles.element__title}>
              {TITLE}
            </h1>
          </Link>
        </li>
        <li className={styles.list__element}>
          <h2 className={styles.element__description}>
            {DESCRIPTION}
          </h2>
        </li>
        <li className={styles.list__element}>
          <Link href={`mailto:${CONTACT}`}>
            <h2 className={styles.element__contact}>
              {CONTACT}
            </h2>
          </Link>
        </li>
      </ul>
    </main>
  );
}
