import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import MyPage from './pages/MyPage';
import SignUp from './pages/Auth/SignUp';
import Album from './pages/Album/Album';
import Artist from './pages/Artist';
import Song from './pages/SongPage/Songpage';
import PlayList from './pages/PlaylistPage/PlaylistPage';
import Search from './pages/SearchPage/SearchPage';

//<Route path = "주소규칙" element = {보여 줄 컴포넌트}/> route 주소형식
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/myPage" element={<MyPage />}></Route>
        <Route path="/artist/:id" element={<Artist />}></Route>
        <Route path="/album/:id" element={<Album />}></Route>
        <Route path="/song/:id" element={<Song />}></Route>
        <Route path="/playlist/:slug" element={<PlayList />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Route>
      <Route path="*" element={<h2>페이지를 찾을 수 없습니다 (404)</h2>} />
    </Routes>
  );
}

export default App;
