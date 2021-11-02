/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  BsLinkedin, BsGithub, BsTwitter,
} from 'react-icons/bs';

import home from '../styles/HomeHeader.module.scss';
import other from '../styles/OtherHeader.module.scss';

export default function Header() {
  const { route } = useRouter();
  const href = (route === '/') ? '/portfolio' : '/';
  const styles = (route === '/') ? home : other;
  return (
    <header className={styles.header}>
      <hgroup className={styles.header__top}>
        <h1 className={styles.top__title}>
          <Link href={href}>
            <a className={styles.title__link}>
              Pablo Apausa.
            </a>
          </Link>
        </h1>
        <h2 className={styles.top__description}>Designer, Fullstack Developer.</h2>
        <ul>
          <li>
            Contact:
            {' '}
            <a href="mailto:pablo@apausa.dev">
              &apos;pablo@apausa.dev&apos;
            </a>
            .
          </li>
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
      </hgroup>
    </header>
  );
}
