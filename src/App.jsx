import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/myPage" element={<MyPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/choice/:category/:id" element={<Choice />}></Route>
        <Route path="/playlist/:id" element={<PlayList />}></Route>
        <Route path="/search/:id" element={Search />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
