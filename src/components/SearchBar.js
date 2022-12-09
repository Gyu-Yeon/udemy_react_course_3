import { useState } from "react";

function SearchBar(props) {
  const { handleClick } = props;
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="SearchBar">
      <input type="text" onChange={(e) => handleChange(e)} value={term} />
      <button onClick={() => handleClick(term)}>Search</button>
    </div>
  );
}

export default SearchBar;
