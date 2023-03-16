import styles from "@/styles/AlbumList.module.css";
import Image from "next/image";
import { Item } from "../types/types";

interface AlbumItemProps extends Item {
    id: number;
}

export default function AlbumItem(props: AlbumItemProps) {
    const { images, name, release_date, id} = props;
    
    return (
      <div className={styles.albumItem} key={id}>
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