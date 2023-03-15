import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie, removeCookies } from "cookies-next";
import axios  from "axios";
import { searchAlbumUrl, MARKET } from "../constants";
import Header from "../components/Head";
import styles from "@/styles/Home.module.css";
import SpotifyBlock from "../components/SpotifyBlock";
import { debounce } from "../lib/debounce";
import Image from "next/image";
import { Item, GetAlbumsResponse } from '../types/types';
import AlbumsList from '../components/AlbumList';
import EmptyBlock from '../components/EmptyBlock';


export default function Page() {
  const router = useRouter();
  const [data, setData] = useState<Item[]>([]);
  const [artistName, setArtistName] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!getCookie("accessToken")) {
      router.push("/login");
    }
  }, []);

  const fetchData = async (artist: string) => {
    axios
      .get(searchAlbumUrl({ market: MARKET, artist }), {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if ((response as GetAlbumsResponse).data.albums) {
          setData(() => (response as GetAlbumsResponse).data.albums.items);
          setArtistName(artist);
        }
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {
          relogin();
        }

        setError(true);
      });
  };
  let debouncedFetch = debounce(async (a: string) => await fetchData(a));

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const artist = e.target.value;
    debouncedFetch(artist);
  };

  const relogin = () => {
    removeCookies("accessToken");
    router.push("/login");
  }

  return (
    <>
      <Header />
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
