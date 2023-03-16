import styles from "@/styles/Login.module.css";
import Head from "../components/Head";
import SpotifyBlock from '../components/SpotifyBlock';
import {LOGIN_URI} from '../constants';

export default function Page() {
  return (
    <>
      <Head />
      <div className={styles.loginWrap}>
        <SpotifyBlock title={"Find all the albums by the artists you love to listen to."} />
        <div className={styles.button}>
          <a href={LOGIN_URI} className={styles.buttonText}>
            <span>Connect</span>
          </a>
        </div>
      </div>
    </>
  );
}
