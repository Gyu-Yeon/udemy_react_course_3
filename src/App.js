import searchImages from "./api";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const handleClick = (term) => {
    searchImages(term);
  };

  return (
    <div className="App">
      <h1>App</h1>
      <SearchBar handleClick={handleClick} />
    </div>
  );
}

export default App;
