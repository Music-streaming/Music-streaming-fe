import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PlayListline.module.css';

export default function PlayListline(){

    const navigate = useNavigate();

    const playlists = [
        { name : 'FAVORITES', slug: 'favourites'},
        { name : '7080', slug:'7080'}
    ];

    const handleNavigate = (slug) => {
        navigate(`/playlist/${slug}`);
    };


    return(
         <div className = {styles.wrapper}>
            <h2 className = {styles.title}>
                PLAYLIST
            </h2>
            <ul className={styles.listWrapper}>
                {playlists.map((list, index)=>(
                    <li
                       key = {index}
                       onClick={()=> handleNavigate(list.slug)}
                       className = {styles.listItem}
                       >
                        <span className = {styles.text}>{list.name}</span>
                       </li>
                ))}
            </ul>
            
        </div>


    );
}