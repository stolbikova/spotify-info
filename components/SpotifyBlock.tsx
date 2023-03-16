import Image from "next/image";
import { SPOTIFY_LOGO_SIZE } from "../constants";
import styles from "@/styles/spotifyBlock.module.css";

export default function SpotifyBlock({title}: {title: string}) {
  return (
    <>
      <Image
        src="/spotify.svg"
        alt="Spotify Logo"
        className={styles.spotifyLogo}
        width={SPOTIFY_LOGO_SIZE}
        height={SPOTIFY_LOGO_SIZE}
        priority
        data-testid="spotifyBlock"
      />
      <div className={styles.titleWrap}>
        <span className={styles.title}>
          {title}
        </span>
      </div>
    </>
  );
}
