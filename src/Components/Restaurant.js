import { BsDot } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import "./Restaurant.css";

const Restaurant = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="restaurant-list">
      <img
        className="restaurant-img"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${cloudinaryImageId}`}
        alt="Reastarant Card"
      />
      <h4>{name}</h4>
      <p>
        {cuisines.length > 3
          ? `${cuisines.join(", ").slice(0, 22)}...`
          : cuisines.join(", ")}
      </p>
      <div className="description">
        <span className="btn">
          <AiFillStar className="icon-star" />
          <span>{avgRating}</span>
        </span>
        <span>
          <BsDot />
        </span>
        <span className="minutes-btn">{slaString}</span>
        <span>
          <BsDot />
        </span>
        <span className="discount-for-two">{costForTwoString}</span>
      </div>
    </div>
  );
};

export default Restaurant;
