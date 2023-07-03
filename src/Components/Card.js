import "./Card.css";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Card = ({ restaurants, allRestaurants }) => {
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-card">
      {restaurants.map((restaurant) => {
        return (
          <Link
            to={"/restaurant/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            <Restaurant {...restaurant.data} />
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
