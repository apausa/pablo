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
                </ul>
              </li>
              <li className={styles.project__date}>{project.date}</li>
              <li className={styles.project__description}>{project.description}</li>
              <li>
                <iframe
                  className={styles.project__video}
                  title={project.title}
                  src={project.video}
                />
              </li>
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
