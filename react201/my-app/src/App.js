import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SearchView from "./components/SearchView";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("LOL");

  return (
    <div className="App">
      <NavBar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResult={searchResult} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
