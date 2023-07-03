import { useState, useEffect } from "react";
import "./Search.css";
import Card from "./Card";
//
function filterData(searchItem, restaurants) {
  const item = restaurants.filter((res) => res.data.name.includes(searchItem));
  return item;
}

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    };

    getRestaurants();
  }, []);

  return (
    <>
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
        <button
          className="submit"
          onClick={() => {
            const data = filterData(searchItem, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <Card restaurants={filterRestaurants} allRestaurants={allRestaurants} />
    </>
  );
};

export default SearchBar;
