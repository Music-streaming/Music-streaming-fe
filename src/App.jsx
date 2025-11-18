import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login';

//<Route path = "주소규칙" element = {보여 줄 컴포넌트}/> route 주소형식
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/myPage" element={<MyPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/choice/:category/:id" element={<Choice />}></Route>
        <Route path="/playlist/:id" element={<PlayList />}></Route>
        <Route path="/search/:id" element={<Search />}></Route>
        <Route paht="*" element={<h2>페이지를 찾을 수 없습니다 (404)</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
