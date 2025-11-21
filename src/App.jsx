import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import PlaylistPage from "./Pages/PlaylistPage/PlaylistPage";



//<Route path = "주소규칙" element = {보여 줄 컴포넌트}/> route 주소형식
function App() {
  return (

      <MainLayout>
        <Routes>
          <Route path="/playlist/:slug" element={<PlaylistPage />}/>
        </Routes>
      </MainLayout>
 
  );
}

export default App;