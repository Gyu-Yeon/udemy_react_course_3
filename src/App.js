import searchImages from "./api";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";

import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleClick = async (term) => {
    const images = await searchImages(term);
    setImages(images);
  };

  return (
    <div className="App">
      <h1>App</h1>
      <SearchBar handleClick={handleClick} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
