import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Main from "./page/Main";
import Post from "./page/Post";
import SearchBook from "./page/SearchBook";
import Write from "./page/Write";
import User from "./page/User";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
        <Route path={"/"} element={<Main />}></Route>
        <Route path={"/post"} element={<Post />}></Route>
        <Route path={"/searchbook"} element={<SearchBook />}></Route>
        <Route path={"/write"} element={<Write />}></Route>
        <Route path={"/user"} element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
