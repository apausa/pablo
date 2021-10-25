import React from 'react';
import styles from '../styles/Archive.module.scss';
import portfolio from '../constants/portfolio';

export default function Archive() {
  const { data }: any = portfolio;
  return (
    <main className={styles.archive}>
      <section className={styles.archive__section}>
        {data.map((project: any) => (
          <article className={styles.section__article}>
            <ul className={styles.article__project}>
              <li>
                <ul className={styles.project__header}>
                  <li className={styles.header__title}>{project.title}</li>
                  <li className={styles.header__github}><a href={project.github}>Github</a></li>
                  <li className={styles.header__deploy}><a href={project.deploy}>Deploy</a></li>
                </ul>
              </li>
              <li className={styles.project__description}>{project.description}</li>
              {(project.thumbnail !== undefined)
                ? <li className={styles.project__thumbnail}>{project.thumbnail}</li>
                : <li />}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
