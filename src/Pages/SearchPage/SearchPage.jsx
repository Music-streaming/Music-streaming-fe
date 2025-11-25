/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useSearch } from "../../context/SearchContext";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ArtistCarousel from "../../components/Search/ArtistCarousel";
import AlbumGrid from "../../components/Search/AlbumGrid";
import TrackList from "../../components/common/TrackList";
import MediaCard from "../../components/common/MediCard";
import MediaListItem from "../../components/common/MediaListItem";

import styles from "./SearchPage.module.css";



export default function SearchPage(){

    const {artists, media, tracks, search } = useSearch();
    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const q = params.get("q");

    useEffect(() => {
        if(q&& q.trim()!= ""){
            search(q);
        }
    },[q]);

    return (
        <div className = {styles.wrapper}>
            <div>
                <section className = {styles.section}>
                    <h5 className = {styles.title}>아티스트</h5>
                    <ArtistCarousel artists = {artists}/>
                </section>

            
            <section className = {styles.section}>
                <h5 className = {styles.title}>앨범</h5>
                <div className = {styles.row}>
                    {media.slice(0,4).map((item)=> (
                        <MediaCard
                            key={item.musicId}
                            imageSrc={item.cover}
                            title={item.title}
                            artist={item.artist}
                            albumId = {item.albumId}
                            musicId = {item.musicId}
                            artistId = {item.artistId}
                            />
                    ))}
                    
                    
                </div>
            </section>
        </div>
        <div>
            <section className = {styles.right}>
                <h5 className = {styles.title}>노래</h5>
                <div className={styles.trackSection}>
                    {tracks.map((track) => (
                        <MediaListItem
                           key = {track.id}
                           imageSrc={track.cover}
                           title={track.title}
                           artist={track.artist}
                           onClick={()=> navigate(`/track/${track.id}`)}
                           onOptionsClick={() => handleMore(track)}
                           />
                    ))}
                </div>
            </section>
        </div>
    </div>
    )
}