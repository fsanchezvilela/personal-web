import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fernando Sanchez | Software Engineer</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi Welcome</h1>

        <p className={styles.description}>
          Im Fernando Sanchez Software Engenieer
        </p>
      </main>

      <footer className={styles.footer}>
        <p>footer here</p>
      </footer>
    </div>
  );
};

export default Home;
