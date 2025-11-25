import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import SearchInput from '../SearchModal/Searchinput';
import PlayListline from '../PlayList/PlayListline';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <img
          src={Logo}
          alt="Music" //img가 뜨지 않을때 대체 되는 문구
          className={styles.logo}
        />
      </Link>
      <SearchInput />
      <PlayListline />
    </div>
  );
}
