import React from 'react';
import styles from '../styles/Portfolio.module.scss';
import portfolio from '../constants/portfolio';

export default function Portfolio() {
  const { data }: any = portfolio;
  return (
    <main className={styles.portfolio}>
      <h2 className={styles.portfolio__title}>Portfolio:</h2>
      <section className={styles.portfolio__section}>
        {data.map((project: any) => (
          <article className={styles.section__article}>
            <ul className={styles.article__project}>
              <li>
                <ul className={styles.project__header}>
                  <li className={styles.header__title}>
                    {project.title}
                    .
                  </li>
                  <li className={styles.header__date}>{project.date}</li>
                </ul>
              </li>
              <li className={styles.project__description}>{project.description}</li>
              <li>
                <a
                  className={styles.project__github}
                  href={project.github}
                >
                  Fork it on Github!
                </a>
              </li>
              <li>
                <iframe
                  className={styles.project__video}
                  title={project.title}
                  src={project.video}
                  allowFullScreen
                />
              </li>
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
