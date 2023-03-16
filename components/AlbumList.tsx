import styles from "@/styles/AlbumList.module.css";
import { Item } from "../types/types";
import AlbumItem from './AlbumListItem';

function AlbumsList({
  data,
  artistName,
  listenersCount = 1000
}: {
  data: Item[];
  artistName: string;
  listenersCount?: number
}) {
  return (
    <>
      <div className={styles.artistNameWrap} >
        <span className={styles.artistName} data-testid="albumListArtistName">{artistName}</span>
      </div>
      <div>
        <span className={styles.subArtistName}>{listenersCount} monthly listeners</span>
      </div>
      <div className={styles.albumsWrap}>
        {data.map((d, idx) => (
          <AlbumItem {...d} id={idx} />
        ))}
      </div>
    </>
  );
}

export default AlbumsList;
