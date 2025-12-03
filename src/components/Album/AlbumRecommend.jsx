import { useNavigate } from "react-router-dom";
import styles from "./AlbumRecommend.module.css";
import {useEffect, useState }from "react";
import { getArtistAlbums } from "../../api/album";

export default function AlbumRecommend({artistId, currentAlbumId }) {
  const { albums, setAlbums } = useState();
  const navigate = useNavigate();

  useEffect(()=> {
    if(!artistId) return;

    async function load(){
      const data = await getArtistAlbums(artistId);

      const filtered = data.filter((album) => album.id !== currentAlbumId);
      setAlbums(filtered);
    }

    load();

  },[artistId, currentAlbumId]);

  return (
    <div className={styles.recommend}>
      <h2 className={styles.title}>dl 아티스트의 다른 앨범</h2>

      <div className={styles.grid}>
        {albums.map((a) => (
          <div
            key={a.id}
            className={styles.card}
            onClick={() => navigate(`/album/${a.id}`)}
          >
            <img src={a.cover} alt={a.title} className={styles.cover} />
            <p className={styles.name}>{a.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
