import styles from "@/styles/AlbumList.module.css";
import Image from "next/image";
import { Item } from "../types/types";

export default function AlbumItem(album: Item) {
    const { images, name, release_date } = album;
    
    return (
      <div className={styles.albumItem}>
        {images && images[1] && images[1]?.url ? <Image
          width={203}
          height={203}
          src={images[1]?.url}
          alt="album img"
          priority
          className={styles.image}
          data-testid="albumItemImage"
        ></Image> : null}
        {name ? <div className={styles.albumName} data-testid="albumItemName">{name}</div> : null}
        {release_date ? <div className={styles.albumDate} data-testid="albumItemDate">
          {new Date(release_date).getFullYear()}
        </div> : null}
      </div>
    );
  }