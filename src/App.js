import Home from "./Pages/Home/Home";


import "./Assets/main.css";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search/Search";
import Bookmark from "./Pages/Bookmark/Bookmark";

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
