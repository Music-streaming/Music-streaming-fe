import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import PlaylistPage from "./Pages/PlaylistPage/PlaylistPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Album from "./Pages/Album/Album";


//<Route path = "주소규칙" element = {보여 줄 컴포넌트}/> route 주소형식
function App() {
  return (

      <MainLayout>
        <Routes>
          <Route path="/playlist/:slug" element={<PlaylistPage />}/>
          <Route path="/search" element={<SearchPage /> }/>
          <Route path="/album/:albumId" element={<Album />} />
        </Routes>
      </MainLayout>
 
  );
}

export default App;