import React from 'react';
import type { NextPage } from 'next';
import {
  BsLinkedin, BsGithub, BsTwitter,
} from 'react-icons/bs';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => (
  <main className={styles.home}>
    <ul className={styles.home__social}>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/apausa/"
        >
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/apausa"
        >
          <BsGithub />
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/pabloapausa"
        >
          <BsTwitter />
        </a>
      </li>
    </ul>
  </main>
);

export default Home;
