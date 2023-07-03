import Card from "./Card";
import SearchBar from "./Searchbar";
import "./Body.css";

const Body = () => {
  return (
    <div className="body-container">
      <SearchBar />
      <Card />
      <hr />
    </div>
  );
};

export default Body;
