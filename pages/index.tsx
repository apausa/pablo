import React from 'react';
import Link from 'next/link';

import information from '../utils/information';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const { name, description, contact } = information;
  return (
    <main className={styles.home}>
      <ul>
        <li>
          <Link href="/">
            <h1>
              {name}
            </h1>
          </Link>
        </li>
        <li>
          <h2>
            {description}
          </h2>
        </li>
        <li>
          <Link href={`mailto:${contact}`}>
            <h2>
              {contact}
            </h2>
          </Link>
        </li>
      </ul>
    </main>
  );
}
