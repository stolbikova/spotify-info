import { useRouter } from "next/router";
import { removeCookies } from "cookies-next";
import Head from "../components/Head";
import styles from "@/styles/Home.module.css";
import SpotifyBlock from "../components/SpotifyBlock";
import { debounce } from "../lib/debounce";
import Image from "next/image";
import AlbumsList from '../components/AlbumList';
import EmptyBlock from '../components/EmptyBlock';
import useSearchApi from '../hooks/fetchData';

export default function Page() {
  const router = useRouter();
  const relogin = () => {
      removeCookies("accessToken");
      router.push("/login");
  }
  const [{ data, artistName, error }, setArtistName] = useSearchApi(relogin);

  let debouncedFetch = debounce(async (a: string) => await setArtistName(a));

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const artist = e.target.value;
    debouncedFetch(artist);
  };

  return (
    <>
      <Head />
      <div className={styles.homeWrap}>
        <div className={styles.homeSearchWrap}>
          <div className={styles.logout} onClick={relogin}>
            <Image
              src="/logout.svg"
              alt="logout"
              width={24}
              height={21}
            />
            <span className={styles.logoutText}>Logout</span>
          </div>
          <div className={styles.inputBlock}>
          <SpotifyBlock
            title={"Find all the albums by the artists you love to listen to."}
          />
          <div className={styles.inputWrap}>
            <input
              className={styles.input}
              placeholder="Search"
              onChange={handleChange}
            ></input>
          </div>
          </div>
        </div>
        <div className={styles.searchResultsWrap}>
          {data.length && artistName ? (
            <AlbumsList data={data} artistName={artistName} />
          ) : (
            <EmptyBlock error={error} />
          )}
        </div>
      </div>
    </>
  );
}
