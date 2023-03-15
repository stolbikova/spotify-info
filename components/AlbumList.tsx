import styles from "@/styles/AlbumList.module.css";
import Image from "next/image";
import { Item } from "../types/types";

function AlbumItem({ album }: { album: Item }) {
  return (
    <div className={styles.albumItem}>
      <Image
        width={203}
        height={203}
        src={album.images[1].url}
        alt="album img"
        priority
        className={styles.image}
      ></Image>
      <div className={styles.albumName}>{album.name}</div>
      <div className={styles.albumDate}>
        {new Date(album.release_date).getFullYear()}
      </div>
      <div></div>
    </div>
  );
}
function AlbumsList({
  data,
  artistName,
}: {
  data: Item[];
  artistName: string;
}) {
  return (
    <>
      <div className={styles.artistNameWrap}>
        <span className={styles.artistName}>{artistName}</span>
      </div>
      <div>
        <span className={styles.subArtistName}>1000 monthly listeners</span>
      </div>
      <div className={styles.albumsWrap}>
        {data.map((d) => (
          <AlbumItem album={d} />
        ))}
      </div>
    </>
  );
}

export default AlbumsList;
