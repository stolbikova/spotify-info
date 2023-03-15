import styles from '@/styles/Home.module.css';
import Header from '../components/Head';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>
      </main>
    </>
  )
}
