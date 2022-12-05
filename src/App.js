import searchImages from "./api";

function App() {
  const handleClick = () => {
    searchImages();
  };
  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
