import styles from "./ArtistPage.module.css";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useArtist } from "../../context/ArtistContext";

import { ArtistHeader } from "./ArtistHeader";
import { ArtistTopTracks } from "./ArtistTopTracks";
import { ArtistAlbums } from "./ArtistAlbums";

export default function ArtistPage() {

  const { artistId } = useParams();
  const { artist, topTracks, albums, loading, loadArtists } = useArtist();

  useEffect(()=> {
    loadArtists(artistId);
  },[artistId]);

  if(loading || !artist) return <div>로딩 중...</div>

  return(
    <div className = {styles.wrapper}>
      <ArtistHeader artist={artist} />
      <ArtistTopTracks tracks = {topTracks}/>
      <ArtistAlbums albums = {albums}/>
    </div>
  );
}