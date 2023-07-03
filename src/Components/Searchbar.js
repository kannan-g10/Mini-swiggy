import { useState } from "react";
import "./Search.css";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  console.log(searchItem);

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search"
        className="search-food"
        value={searchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      <button className="submit" onClick={() => setSearchItem("")}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
